// components/TeamMembers.js
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const TeamMembers = () => {
  const team = [
    { 
      name: 'Alice', 
      role: 'CEO', 
      img: 'https://randomuser.me/api/portraits/women/1.jpg',
      description: 'Alice is an experienced leader with a passion for technology and innovation.',
      linkedin: '#', // Add actual LinkedIn URL
      facebook: '#', // Add actual Facebook URL
      instagram: '#', // Add actual Instagram URL
      twitter: '#', // Add actual Twitter URL
    },
    { 
      name: 'Bob', 
      role: 'CTO', 
      img: 'https://randomuser.me/api/portraits/men/1.jpg',
      description: 'Bob is a tech visionary, focused on driving technical excellence and innovation.',
      linkedin: '#', // Add actual LinkedIn URL
      facebook: '#', // Add actual Facebook URL
      instagram: '#', // Add actual Instagram URL
      twitter: '#', // Add actual Twitter URL
    },
    { 
      name: 'Charlie', 
      role: 'Developer', 
      img: 'https://randomuser.me/api/portraits/men/2.jpg',
      description: 'Charlie creates stunning user experiences that connect technology and design.',
      linkedin: '#', // Add actual LinkedIn URL
      facebook: '#', // Add actual Facebook URL
      instagram: '#', // Add actual Instagram URL
      twitter: '#', // Add actual Twitter URL
    },
    { 
      name: 'Charlie', 
      role: 'Designer', 
      img: 'https://randomuser.me/api/portraits/men/2.jpg',
      description: 'Charlie creates stunning user experiences that connect technology and design.',
      linkedin: '#', // Add actual LinkedIn URL
      facebook: '#', // Add actual Facebook URL
      instagram: '#', // Add actual Instagram URL
      twitter: '#', // Add actual Twitter URL
    },
  ];

  return (
    <div className={styles.team}>
      <h2 className={styles.heading}>Meet Our Team</h2>
      <ul className={styles.teamList}>
        {team.map((member, index) => (
          <li key={index} className={styles.teamMember}>
            <img src={member.img} alt={member.name} className={styles.memberImage} />
            <div className={styles.memberInfo}>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p className={styles.memberDescription}>{member.description}</p>
              <div className={styles.socialIcons}>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                </a>
                <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                </a>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamMembers;
