import { NavLink } from 'react-router-dom';

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { LogOutIcon } from 'lucide-react';
import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import DashboardRoutes from '../../../routes/dashboard.routes';
import logo from '/assets/logo-rmbg.png';

const DashboardNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNavOpen = () => setIsNavOpen(!isNavOpen);
  const headerRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const logUserOut = () => {
    logout();
    navigate('/auth/login');
  };

  useEffect(() => {
    // disable scrolling of body when navbar is open
    if (isNavOpen) document.body.style.overflowY = 'hidden';
    else document.body.style.overflowY = 'unset';

    const handleClickOutside = (e) => {
      if (isNavOpen && !headerRef.current.contains(e.target))
        setIsNavOpen(false);
    };

    // close the nav if the user clicks outside
    document.body.addEventListener('click', handleClickOutside);

    // cleanup event listener on unmount
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, [isNavOpen]);

  return (
    <>
      <header ref={headerRef}>
        <nav
          className={`lg:block w-[100px] pt-14 lg:pt-8 h-full overflow-y-auto bg-lemon ${
            isNavOpen ? 'block z-10 lg:z-0 fixed lg:static top-0' : 'hidden'
          }`}
        >
          <img
            src={logo}
            alt="healthSync-logo"
            className="w-[70px] h-[60px] lg:w-[90px] lg:h-[80px] mx-auto"
          />
          <ul
            id="navigation"
            className="flex items-center flex-col mt-16 gap-8"
          >
            {DashboardRoutes.children
              .filter(({ path, display }) => path && display)
              .map(({ path, icon }) => (
                <li key={path} className="dashboard-nav">
                  <NavLink
                    aria-label="home"
                    className="hover:bg-lightGray2 duration-[.4s] w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] rounded-[12px] lg:rounded-[20px] flex justify-center items-center"
                    to={path}
                    onClick={() => setIsNavOpen(false)}
                  >
                    {icon}
                  </NavLink>
                </li>
              ))}
            <li className="dashboard-nav">
              <button
                aria-label="home"
                className="hover:bg-lightGray2 duration-[.4s] w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] rounded-[12px] lg:rounded-[20px] flex justify-center items-center"
                onClick={onOpen}
              >
                <LogOutIcon color="white" />
              </button>
            </li>
          </ul>
        </nav>

        {/* hamburger menu icon */}
        <button
          aria-controls="navigation"
          aria-expanded={isNavOpen}
          aria-label="navigation"
          onClick={toggleNavOpen}
          className={`mt-8 -top-2 right-5 sm:right-10 md:right-20 lg:hidden ${
            isNavOpen ? 'z-20 fixed' : 'absolute'
          }`}
        >
          <span
            className={`block h-1 w-[27px] bg-black duration-500 ${
              isNavOpen
                ? 'translate-x-[-4.5px] translate-y-[6px] rotate-[-405deg] '
                : ''
            } `}
            aria-hidden
          />
          <span
            className={`block h-1 w-[27px] bg-black mt-2 duration-500 ${
              isNavOpen
                ? 'translate-x-[-4.5px] translate-y-[-6px] rotate-[405deg]'
                : ''
            }`}
          />
        </button>
      </header>

      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Logout?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to get logged out of your current session.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="red" ml={3} onClick={logUserOut}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DashboardNavbar;
