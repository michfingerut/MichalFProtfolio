// External modules
import React from 'react';
import IconButton from '@mui/material/IconButton';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { FaGithub, FaWhatsapp } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';
import { Tooltip } from '@mui/material';

// Internal modules
import {
  FooterContainer,
  FooterIconContainer,
  FooterText,
  FooterLink,
} from '../styles/footerStyles';

function Footer() {
  return (
    <FooterContainer>
      <FooterIconContainer>
        <Tooltip title="Email">
          <FooterLink href="mailto:michfingerut@gmail.com">
            <IconButton>
              <EmailOutlinedIcon />
            </IconButton>
          </FooterLink>
        </Tooltip>

        <Tooltip title="GitHub">
          <FooterLink
            href="https://github.com/michfingerut"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <FaGithub />
            </IconButton>
          </FooterLink>
        </Tooltip>

        <Tooltip title="LinkedIn">
          <FooterLink
            href="https://www.linkedin.com/in/michal-fingerut/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <IoLogoLinkedin />
            </IconButton>
          </FooterLink>
        </Tooltip>

        <Tooltip title="WhatsApp">
          <FooterLink
            href="https://wa.me/0542398171"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <FaWhatsapp />
            </IconButton>
          </FooterLink>
        </Tooltip>
      </FooterIconContainer>

      <FooterText>Designed and developed by Michal Fingerut © 2024</FooterText>
    </FooterContainer>
  );
}

export default Footer;
