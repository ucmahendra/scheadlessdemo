// components/Header.tsx

import {
  ImageField,
  LinkField,
  Link,
  Text,
  Image,
  ComponentParams,
  ComponentRendering,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import React, { useState } from 'react';
interface HeaderProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
}
export interface Fields {
  data: {
    header: MainHeader;
  };
}
export interface MainHeader {
  logo: {
    jsonValue: ImageField;
  };
  logoLink: {
    jsonValue: LinkField;
  };
  presonalizedText: {
    jsonValue: {
      value: string;
    };
  };
  L1Links: {
    results: L1Link[];
  };
}

export interface L1Link {
  id: string;
  label: {
    jsonValue: {
      value: string;
    };
  };
  link: {
    jsonValue: LinkField;
  };
  L2Links?: {
    results: L2Link[];
  };
}
export interface L2Link {
  id: string;
  label: {
    jsonValue: {
      value: string;
    };
  };
  link: {
    jsonValue: LinkField;
  };
  L3Links?: {
    results: L3Link[];
  };
}
export interface L3Link {
  id: string;
  label: {
    jsonValue: {
      value: string;
    };
  };
  link: {
    jsonValue: LinkField;
  };
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { sitecoreContext } = useSitecoreContext();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setSubDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleSubDropdown = () => setSubDropdownOpen(!isSubDropdownOpen);
  const isEditing = sitecoreContext?.pageEditing;
  const model: MainHeader = props?.fields?.data?.header;
  console.log('model?.L1Links', model?.L1Links.results[1]);
  if (!model) {
    if (isEditing) {
      return <h3>Data source for rendering {props.rendering.componentName} is not set</h3>;
    }
    return <></>;
  }
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          field={model?.logoLink?.jsonValue}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image field={model?.logo?.jsonValue} className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <Text field={model.presonalizedText.jsonValue} />
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {model?.L1Links &&
              model?.L1Links?.results?.map((link) =>
                link?.L2Links?.results && link?.L2Links?.results?.length > 0 ? (
                  <li key={link.id}>
                    <button
                      id="dropdownNavbarLink"
                      data-dropdown-toggle="dropdownNavbar"
                      className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                      onClick={toggleDropdown}
                    >
                      <Text field={link?.label?.jsonValue} />{' '}
                      <svg
                        className="w-2.5 h-2.5 ms-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    {isDropdownOpen && (
                      <div
                        id="dropdownNavbar"
                        className="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownLargeButton"
                        >
                          {link.L2Links?.results?.map((link2) =>
                            link2?.L3Links?.results && link2?.L3Links?.results?.length > 0 ? (
                              <li aria-labelledby="dropdownNavbarLink" key={link2.id}>
                                <button
                                  id="doubleDropdownButton"
                                  data-dropdown-toggle="doubleDropdown"
                                  data-dropdown-placement="right-start"
                                  onClick={toggleSubDropdown}
                                  type="button"
                                  className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  <Text field={link2?.label?.jsonValue} />{' '}
                                  <svg
                                    className="w-2.5 h-2.5 ms-2.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                  >
                                    <path
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="m1 1 4 4 4-4"
                                    />
                                  </svg>
                                </button>
                                {isSubDropdownOpen && (
                                  <div
                                    id="doubleDropdown"
                                    className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                  >
                                    <ul
                                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                      aria-labelledby="doubleDropdownButton"
                                    >
                                      {link2.L3Links?.results?.map((link3) => (
                                        <li key={link3?.id}>
                                          <Link
                                            field={link3?.link?.jsonValue}
                                            href="#"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                          >
                                            <Text field={link3?.label?.jsonValue} />
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </li>
                            ) : (
                              <li key={link2.id}>
                                <Link
                                  field={link2?.link?.jsonValue}
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  <Text field={link2?.label?.jsonValue} />
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={link.id}>
                    <Link
                      field={link?.link?.jsonValue}
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      <Text field={link?.label?.jsonValue} />
                    </Link>
                  </li>
                )
              )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
