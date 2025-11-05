import Link from "next/link"

import {FaGithub, FaLinkedin} from "react-icons/fa"
import {SiLeetcode} from "react-icons/si"

const socials = [
  {icon: <FaGithub />, path:"https://github.com/Harsh5840"},
  {icon: <FaLinkedin />, path:"https://www.linkedin.com/in/harsh-shukla-046492279/"},
  {icon: <SiLeetcode />, path:"https://leetcode.com/u/oSINS3VpGQ/"},
]

const Social = ({containerStyles , iconStyles}: any) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
                    return (
                      <Link
                        href={item.path}
                        key={index}
                        className={iconStyles}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${item.path}`}
                      >
                        {item.icon}
                      </Link>
          );
    })}
    </div>
  )
}

export default Social