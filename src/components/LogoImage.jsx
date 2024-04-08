import React from 'react'

const LogoImage = (props) => {

    return (
        <div>
            <img
                style={{
                    height: props.height,
                    width: props.width,
                }}
                className='h-12 bg-white  border-2 rounded-full ml-4 p-1'
                src="/Logo.png"
                alt="logo"
            />
        </div>
    )
}

export default LogoImage;
