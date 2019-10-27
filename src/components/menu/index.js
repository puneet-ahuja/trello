import React from 'react';
import './style.css'

function ListCard ({type,className,title,src,description,content}) {
    return (
        <div className='list-card-container'>
            {type==='icon'
                ? <img className='icon' src={src} alt={title}/>
                : type === 'style'
                    ?<div className={'icon '+className}></div>
                    :<div className='icon'>{content}</div>}
            <div className='list-card-title'>{title}</div>
        </div>
    )
}

function Menu() {

    const config = [
        {
            type: "style",
            className: 'bg-blue',
            title: 'Change Background'
        },
        {
            type: "icon",
            src: './assets/icons/Board.png',
            title: 'FIlter Cards'
        },
        {
            type: "icon",
            src: './assets/icons/Board.png',
            title: 'Stickers'
        },
        {
            type: "icon",
            src: './assets/icons/Board.png',
            title: 'Power-ups',
            description: 'Calendar, Google Drive and more...'
        },{
            type: "content",
            content: '...',
            title: 'More'
        }

    ]

    const users = [{name:'Puneet',thumb_image_url:'./assets/user/user.jpg'},{name:'Puneet',thumb_image_url:'./assets/user/user.jpg'},{name:'Puneet',thumb_image_url:'./assets/user/user.jpg'}]
  return (
    <div className="menu">
        <div className='menu-header'>
            Menu
            <span className='menu-cross-btn'>X</span>
        </div>
        <div className='user-container'>
            {users.map(({name,thumb_image_url}) => <img className='user-image' src={thumb_image_url} alt={name}/>)}
        </div>
        <div className='invite'>
            Invite...
        </div>
        {config.map(item => <ListCard {...item}/>)}
    </div>
  );
}

export default Menu;
