import React from 'react';
import './index.css';
import TextButton from '../ui/buttons/text/TextButton';

export default function Bio(props) {
  const {
    name,
    about,
    bio,
    socials,
  } = props;

  const openLink = (label) => {
    window.open(socials.find(el => el.title === label).url, "_blank");
  };

  return (
    <div className="bio">
      <h3 className="bio__name">
        { name }
      </h3> 
      <p className="bio__about">
        { about }
      </p>
      <p className="bio__biografia">
        { bio }
      </p>
      <div className="bio__socials">
        {socials.map((social, i) => <TextButton label={social.title} color='white' fontSize='14' fontWeight='medium' key={i} handleClick={openLink} />)}
      </div>
    </div>
  );
};
