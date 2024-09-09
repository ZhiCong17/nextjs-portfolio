import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className="px-60 flex justify-between">
      <p className="w-80">© Copyright 2024. Made by Ore Zhi Cong</p>
      <p>Back To Top</p>
      <div className="space-x-6 w-80 text-end">
        <FontAwesomeIcon icon={faGithub} size="2x" />
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </div>
    </div>
  )
}
