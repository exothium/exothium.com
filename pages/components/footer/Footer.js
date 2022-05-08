import React from "react";

function Footer() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '25px 0px'
            }}
        >
            <a target="_blank" href="https://discord.gg/yhNrcBmBgA">
                <img
                    src={'./assets/icons/discord_get_in_no_font.svg'}
                    alt="discordIcon"
                    style={{
                        width: '150px',
                        cursor: 'pointer'
                    }}

                />
            </a>
        </div>
    )
}

export default Footer