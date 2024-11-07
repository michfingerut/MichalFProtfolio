import React from 'react';
import IconButton from '@mui/material/IconButton';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { FaGithub } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';

import { Tooltip } from '@mui/material';

//TODO: add links
function Footer() {
  return (
    <div>
      <Tooltip text="Email">
        <IconButton>
          <EmailOutlinedIcon />
        </IconButton>
      </Tooltip>

      <Tooltip text="Git Hub">
        <IconButton>
          <FaGithub />
        </IconButton>
      </Tooltip>

      <Tooltip text="Linkedin">
        <IconButton>
          <IoLogoLinkedin />
        </IconButton>
      </Tooltip>
      {/* TODO: add button return to the top */}
      <p>Designed and developed by Michal Fingerut © 2024</p>
    </div>
  );
}

export default Footer;
