import React, { useState, useEffect } from 'react';
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import ReactDOM from 'react-dom';
import './topContent.css';

var path;
var curve;
var text;
var graphics;
var planet;
var star;
var space_stars;
var galaxyLayer;
var circleMaskBlackhole;
var flaremask;

function setBlackHole(game) {
    const maskX = game.width / 2;
    const maskY = game.height / 2;
    const mask = this.make.image({
        x: maskX,
        y: maskY,
        key: 'blackhole',
        add: true
    });

    //let blackHole = this.add.image(game.width / 2, game.height / 2, 'blackHole');

    mask.setScale(0.4);
    let backgroundSize = mask.width * 0.5;

    this.backgroundImage = this.add.graphics();
    this.backgroundImage.setPosition(maskX, maskY);
    this.backgroundImage.fillGradientStyle(0xBA1F4B, 0xBA1F4B, 0x000000, 0x000000, 1, 1, 0, 0);
    this.backgroundImage.fillRect(-backgroundSize / 2, -backgroundSize / 2, backgroundSize, backgroundSize);
    this.backgroundImage.mask = new Phaser.Display.Masks.BitmapMask(this, mask);
}

function setAnimationWorld(game) {
    var centerX = game.width / 2;
    var centerY = game.height / 2;
    var sliderGraphics = this.add.graphics();

    path = { t: 0, vec: new Phaser.Math.Vector2() };

    curve = new Phaser.Curves.Ellipse(centerX, centerY, 100, 150);
    curve.setXRadius(10);
    curve.setYRadius(155);
    curve.setStartAngle(0);
    curve.setEndAngle(360);
    curve.setRotation(1.575);


    /*createSlider(sliderGraphics, 100, 10, 'width', 500, 0, 400, 10, curve.setXRadius);
    createSlider(sliderGraphics, 100, 30, 'height', 500, 0, 300, 155, curve.setYRadius);
    createSlider(sliderGraphics, 100, 50, 'start', 500, 0, 360, 0, curve.setStartAngle);
    createSlider(sliderGraphics, 100, 70, 'end', 500, 0, 360, 360, curve.setEndAngle);
    createSlider(sliderGraphics, 100, 90, 'angle', 500, 0, 360, 1.5, curve.setRotation);*/

    var centerPoint = this.add.image(centerX, centerY, 'dragcircle', 0).setInteractive();
    centerPoint.setData('control', 'center').setData('vector', curve.p0);
    this.input.setDraggable(centerPoint);

    let rotationDuration = 30000;
    let rotationtween = this.tweens.add({
        targets: path,
        t: 1,
        ease: 'Linear',
        duration: rotationDuration,
        repeat: -1,
        onStart: function () {
            setTimeout(() => {
                galaxyLayer.moveDown(star);
                //console.log("moveDown:star");
            }, rotationDuration * 0.8);

            setTimeout(() => {
                galaxyLayer.moveUp(star);
                //console.log("moveUp:star");
            }, rotationDuration * 0.2);

            //console.log("onStart");
        },
        onRepeat() {
            setTimeout(() => {
                galaxyLayer.moveDown(star);
                //console.log("moveDown:star");
            }, rotationDuration * 0.8);

            setTimeout(() => {
                galaxyLayer.moveUp(star);
                //console.log("moveUp:star");
            }, rotationDuration * 0.2);
        }
    });

    circleMaskBlackhole = this.add.graphics();
    //backgroundStars.lineStyle(thickness, color, alpha);
    circleMaskBlackhole = circleMaskBlackhole.setPosition(centerX - 5, centerY).fillCircle(0, 0, 200).strokeCircle(0, 0, 205);

    this.anims.create({
        key: 'orbit',
        frames: this.anims.generateFrameNumbers('planet', {
            start: 0,
            end: 299
        }),
        frameRate: 15,
        repeat: -1
    });

    planet = this.add.sprite(500, 500).setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 100), Phaser.Geom.Rectangle.Contains);
    planet.setScale(1);
    planet.play('orbit');
    planet.setMask(circleMaskBlackhole.createGeometryMask());

    planet.on('pointerover', function (pointer) {
        this.setTint(0xff0000);
    });

    planet.on('pointerout', function (pointer) {
        this.clearTint();
    });

    this.anims.create({
        key: 'rotate',
        frames: this.anims.generateFrameNumbers('star', { start: 0, end: 299 }),
        frameRate: 15,
        repeat: -1
    });

    star = this.add.sprite(centerX, centerY);
    star.setScale(0.3);
    star.play('rotate');

    var color = 0xffff00;
    var thickness = 4;
    var alpha = 1;

    let spotlightmask = this.add.image(centerX - 5, centerY, 'spotlightmask');
    spotlightmask.setScale(0.81);
    //spotlightmask.setMask(circleMaskBlackhole.createGeometryMask());

    flaremask = this.add.image(centerX + 30, centerY, 'flare');
    flaremask.setAlpha(0.65);
    flaremask.setScale(0.5);
    flaremask.setMask(circleMaskBlackhole.createGeometryMask());

    this.anims.create({
        key: 'stars',
        frames: this.anims.generateFrameNumbers('stars', { start: 0, end: 224 }),
        frameRate: 10,
        repeat: -1
    });

    space_stars = this.add.sprite(centerX, centerY);
    space_stars.play('stars');
    space_stars.setOrigin(0.5, 0.5);
    space_stars.setScale(1.25);
    space_stars.setAlpha(0.95);
    space_stars.setMask(circleMaskBlackhole.createGeometryMask());

    let blackhole = this.add.image(centerX, centerY + 24.5, 'blackhole');
    blackhole.setAlpha(0.5);
    blackhole.setScale(0.4);

    galaxyLayer = this.add.layer();
    galaxyLayer.add([space_stars, star, planet, blackhole, spotlightmask, flaremask]);
    //  Debug graphics
    graphics = this.add.graphics();


}

function createSlider(graphics, x, y, label, width, min, max, value, callback) {
    //  Default value
    value = Phaser.Math.Clamp(value, min, max);

    graphics.lineStyle(1, 0xffffff, 1);
    graphics.lineBetween(x, y + 8, x + width, y + 8);

    var text = this.add.text(x - 10, y, label + ':', { font: '16px Courier', fill: '#00ff00' }).setOrigin(1, 0);
    var textValue = this.add.text(x + width + 10, y, value.toFixed(2), { font: '16px Courier', fill: '#00ff00' });

    var image = this.add.image(x, y + 8, 'dragcircle', 0).setInteractive();

    image.setData('labelValue', textValue);

    image.setData('left', x);
    image.setData('right', x + width);

    this.input.setDraggable(image);

    //  Drag limits

    image.setData('label', label);

    //  The range the control is allowed to be within (the actual values, not the percentage or pixels)
    image.setData('min', min);
    image.setData('max', max);
    image.setData('value', value);

    //  The scale is how many pixels = 1 unit of range
    var scale = max / width;

    image.setData('scale', scale);

    var p = Phaser.Math.Percent(value, min, max);

    // console.log('width', width);
    // console.log('min', min);
    // console.log('max', max);
    // console.log('value', value, 'p:', p, '%');
    // console.log('scale', scale);

    image.x += p * width;

    image.setData('callback', callback);

    image.on('drag', function (pointer, dragX, dragY) {

        var min = this.getData('min');
        var max = this.getData('max');
        var scale = this.getData('scale');
        var left = this.getData('left');
        var right = this.getData('right');

        dragX = Phaser.Math.Clamp(dragX, left, right);

        this.x = dragX;

        //  Calculate the value
        var value = (dragX - left) * scale;

        this.setData('value', value);

        this.getData('labelValue').setText(value.toFixed(2));

        var callback = this.getData('callback');

        callback.call(curve, value);

    });

    // this.input.setOnDragCallback(image, updateSlider, this);
}

function updateSlider(handle, pointer, dragX, dragY) {
    var min = handle.getData('min');
    var max = handle.getData('max');
    var scale = handle.getData('scale');
    var left = handle.getData('left');
    var right = handle.getData('right');

    dragX = Phaser.Math.Clamp(dragX, left, right);

    handle.x = dragX;

    //  Calculate the value
    var value = (dragX - left) * scale;

    handle.setData('value', value);

    handle.getData('labelValue').setText(value.toFixed(2));

    var callback = handle.getData('callback');

    callback.call(curve, value);
}

function TopContent(props) {
    const [game, setGame] = useState({
        width: 800,
        height: 800,
        type: Phaser.AUTO,
        scene: {
            init: function () {
                this.cameras.main.setBackgroundColor('#121212');
                setBlackHole = setBlackHole.bind(this);
                setAnimationWorld = setAnimationWorld.bind(this);
                createSlider = createSlider.bind(this);
            },
            preload() {
                //this.load.image('mask', 'assets/mainAssets/ExothiumLogo.svg');
                //this.load.image('mask', 'assets/exothiumWorldAssets/blackHole.png');
                //this.load.image('spotlightmask', 'assets/exothiumWorldAssets/spotlightmask.png');
                this.load.image('flareSingle', 'assets/exothiumWorldAssets/bubble_effect.png');
                this.load.image('spotlightmask', 'assets/exothiumWorldAssets/bubble_white.png');
                this.load.image('flare', 'assets/exothiumWorldAssets/flare.png');
                this.load.image('blackhole', 'assets/exothiumWorldAssets/black_hole.png');
                this.load.image('space_stars', 'assets/exothiumWorldAssets/space_stars.jpg');
                //this.load.spritesheet('dragcircle', 'assets/exothiumWorldAssets/dragcircle.png', { frameWidth: 16 });
                //this.load.image('lemming', 'assets/exothiumWorldAssets/lemming.png');
                this.load.spritesheet('planet', 'assets/exothiumWorldAssets/planet.png', {
                    frameWidth: 150,
                    frameHeight: 150
                });
                this.load.spritesheet('star', 'assets/exothiumWorldAssets/mainStar.png', {
                    frameWidth: 300,
                    frameHeight: 300
                });

                /*this.load.spritesheet('stars', 'assets/exothiumWorldAssets/spritesheet.png', {
                    frameWidth: 640,
                    frameHeight: 360
                });*/
                this.load.spritesheet('stars', 'assets/exothiumWorldAssets/stars.png', {
                    frameWidth: 564,
                    frameHeight: 315
                });
                this.load.on('complete', loadComplete);
            },
            create() {

                setAnimationWorld(game);
                //setBlackHole(game);
            },
            update() {
                //this.backgroundImage.angle += 1.25;

                graphics.clear();

                /*graphics.lineStyle(2, 0xffffff, 0.05);

                curve.draw(graphics, 64);*/

                curve.getPoint(path.t, path.vec);

                //graphics.fillStyle(0xffff00, 1);
                //graphics.fillCircle(path.vec.x, path.vec.y, 8);

                planet.x = path.vec.x;
                planet.y = path.vec.y;
                //make planet bigger or smaller depending on y

                /*planet.setScale(Math.pow(path.vec.y, 7) * 0.000000000000000055 / star.y);*/
                //planet.setScale((25 + planet.y -  star.y ) / (20 + star.y));
                planet.setScale(Math.pow(1 + (((planet.y -  star.y) - 10) / (star.y / 20)), 2));
                space_stars.rotation -= 0.0005;
                if(planet.scale > 0.875 ) {
                    flaremask.setVisible(false);
                } else {
                    flaremask.setVisible(true);
                }

            }
        }
    });

    const loadComplete = () => {
        props.completeLoading('blackhole');
    }


    return (
        <div className='topContentBody'>
            <img
                src={'./assets/mainAssets/horizontal_exothium.svg'}
                alt="Logo"
                className="blackHole"
            />
            <IonPhaser game={game} initialize={true}/>
        </div>
    );
}

export default TopContent;