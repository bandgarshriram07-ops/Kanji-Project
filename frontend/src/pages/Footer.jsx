import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer className='bg-gray-300 text-black flex flex-col items-center justify-center py-4 mt-auto'>
        <p className='text-center text-sm'>© 2022 Copyright: Kanji Finder</p>
        <div className='flex flex-row gap-4 my-4 text-md font-semibold cursor-pointer'>
            <GitHubIcon />
            <LinkedInIcon />
            <InstagramIcon />
            <TwitterIcon />
        </div>
    </footer>
  )
}

export default Footer