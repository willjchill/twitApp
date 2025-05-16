import { useState, useEffect } from 'react'

function SidebarIcon(props) {
	return (
		<div className='flex align-middle space-x-4 w-32 h-12 cursor-pointer'>
			<img src={props.link} alt='Home' className={props.img_size ? props.img_size : "w-8 h-8"} />
			<div className='flex items-center justify-enter w-12 h-8 font-bold'>{props.name}</div>
		</div>
	);
}

export default SidebarIcon;
