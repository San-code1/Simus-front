<template>
  <!-- Menu mobile -->
  <header class="header">
    <div>
      <img src="@/assets/icons/logo/Simuslogosmall.svg">
    </div>
    <div class="hamburguer-menu" @click="openMenu">
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M2.19995 4.99995C2.19995 4.55812 2.55812 4.19995 2.99995 4.19995H21C21.4418 4.19995 21.7999 4.55812 21.7999 4.99995C21.7999 5.44178 21.4418 5.79995 21 5.79995H2.99995C2.55812 5.79995 2.19995 5.44178 2.19995 4.99995ZM2.19995 12C2.19995 11.5581 2.55812 11.2 2.99995 11.2H21C21.4418 11.2 21.7999 11.5581 21.7999 12C21.7999 12.4418 21.4418 12.8 21 12.8H2.99995C2.55812 12.8 2.19995 12.4418 2.19995 12ZM2.19995 19C2.19995 18.5581 2.55812 18.2 2.99995 18.2H21C21.4418 18.2 21.7999 18.5581 21.7999 19C21.7999 19.4418 21.4418 19.8 21 19.8H2.99995C2.55812 19.8 2.19995 19.4418 2.19995 19Z" />
      </svg>
    </div>
  </header>
  <nav class="sidebar" ref="nav">
    <!-- Contenido del Sidebar -->
    <div class="sidebar-container">
      <div class="navbar-header">
        <div class="icon-desktop">
          <img src="@/assets/icons/logo/Simuslogolarge.svg" alt="SimusLogo">
        </div>
        <!-- Sidebar mobile -->
        <div class="icon-mobile">
          <img src="@/assets/icons/logo/Simuslogosmall.svg" alt="SimusLogo mobile">
        </div>
        <div class="close-menu" @click="closeMenu">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M6.19257 6.19171C6.50499 5.87929 7.01152 5.87929 7.32394 6.19171L12.0009 10.8687L16.6778 6.19171C16.9902 5.87929 17.4967 5.87929 17.8092 6.19171C18.1216 6.50413 18.1216 7.01066 17.8092 7.32308L13.1323 12L17.8092 16.677C18.1216 16.9894 18.1216 17.4959 17.8092 17.8083C17.4967 18.1207 16.9902 18.1207 16.6778 17.8083L12.0009 13.1314L7.32394 17.8083C7.01152 18.1207 6.50498 18.1207 6.19256 17.8083C5.88015 17.4959 5.88015 16.9894 6.19257 16.6769L10.8695 12L6.19257 7.32308C5.88015 7.01066 5.88015 6.50413 6.19257 6.19171Z" />
          </svg>

        </div>
        <!-- Sidebar mobile -->
      </div>
      <button class="planet-user" to="/">
        <div class="avatar-username">
          <div class="img-planet-user">
            <img src="@/assets/img/skeleton.webp" alt="Player planet avatar" />
          </div>
          <div class="container-planet">
            <p class="label-xl content-1">$planetname [ 1:1:1 ]</p>
            <p class="label-l content-2">+3 planets</p>
          </div>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
            <path fill-rule="evenodd"
              d="M7.576 1.576a.6.6 0 0 1 .848 0l3.334 3.333a.6.6 0 0 1-.849.849L8 2.848l-2.91 2.91a.6.6 0 1 1-.848-.849l3.334-3.333ZM4.242 10.242a.6.6 0 0 1 .849 0L8 13.152l2.91-2.91a.6.6 0 1 1 .848.849l-3.334 3.333a.6.6 0 0 1-.848 0l-3.334-3.333a.6.6 0 0 1 0-.849Z"
              clip-rule="evenodd" />
          </svg>
        </div>
      </button>

      <ul>
        <div class="list-container">
          <li>
            <router-link class="sidebar-button" to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path fill-rule="evenodd"
                  d="m8 2.67-6.398 3.2a.6.6 0 1 1-.537-1.073l6.488-3.244a1 1 0 0 1 .894 0l6.488 3.244a.6.6 0 1 1-.537 1.073L8 2.67ZM2.667 6.733a.6.6 0 0 1 .6.6v5.334c0 .405.328.733.733.733h8a.733.733 0 0 0 .733-.733V7.333a.6.6 0 1 1 1.2 0v5.334A1.933 1.933 0 0 1 12 14.6H4a1.933 1.933 0 0 1-1.933-1.933V7.333a.6.6 0 0 1 .6-.6Z"
                  clip-rule="evenodd" />
              </svg>
              Space Center
            </router-link>
          </li>
          <li>
            <a class="sidebar-button" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M4.175 5.656a.6.6 0 0 1 .836-.148L8 7.601l2.99-2.093a.6.6 0 0 1 .687.983L8.344 8.825a.6.6 0 0 1-.688 0L4.323 6.49a.6.6 0 0 1-.148-.835Z"
                  clip-rule="evenodd" />
                <path fill-rule="evenodd"
                  d="M2.667 3.933a.733.733 0 0 0-.734.734v6.666c0 .405.329.734.734.734h10.666a.733.733 0 0 0 .734-.734V4.667a.733.733 0 0 0-.734-.734H2.667Zm-1.934.734c0-1.068.866-1.934 1.934-1.934h10.666c1.068 0 1.934.866 1.934 1.934v6.666a1.933 1.933 0 0 1-1.934 1.934H2.667a1.933 1.933 0 0 1-1.934-1.934V4.667Z"
                  clip-rule="evenodd" />
              </svg>
              Communications</a>
          </li>
          <li>
            <p class="sidebar-list-section">Buildings</p>
          </li>
          <li>
            <router-link class="sidebar-button" to="/ResourcesView.vue">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.333.733a.6.6 0 0 1 .6.6v2a1.4 1.4 0 0 0 1.4 1.4H10c1.493 0 2.6.787 2.6 1.934a.6.6 0 1 1-1.2 0c0-.187-.227-.734-1.4-.734h-.667a2.6 2.6 0 0 1-2.6-2.6v-2a.6.6 0 0 1 .6-.6ZM11.4 8a.6.6 0 0 1 .6-.6h2a.6.6 0 0 1 .6.6v6a.6.6 0 0 1-.6.6H2a.6.6 0 0 1-.6-.6v-2.667a.6.6 0 0 1 .21-.455l2.333-2a.6.6 0 0 1 .708-.054L7 10.292l2.349-1.468a.6.6 0 0 1 .666.021l1.385.989V8Zm0 3.309-1.756-1.254-2.326 1.454a.6.6 0 0 1-.636 0l-2.293-1.433L2.6 11.609v1.79h8.8v-2.09Zm1.2 2.09h.8V8.6h-.8v4.8ZM14 .733a.6.6 0 0 1 .6.6c0 .604-.253 1.064-.638 1.377a2.19 2.19 0 0 1-.546.32c.67.693 1.184 1.828 1.184 3.637a.6.6 0 1 1-1.2 0c0-1.854-.609-2.657-1.093-3.02a1.971 1.971 0 0 0-.86-.368 5.5 5.5 0 0 1-.146-.012l-.028-.003-.01-.001h-.003s-.001-.001.073-.596l.001-.6H11.355a1.467 1.467 0 0 1 .157.01l.06.008a3.98 3.98 0 0 0 .985-.05c.286-.053.508-.142.648-.256.115-.093.195-.216.195-.446a.6.6 0 0 1 .6-.6Zm-2.593 1.338Zm-.074.596.001-.6a.6.6 0 0 0-.074 1.195l.073-.595Z"
                  clip-rule="evenodd" />
              </svg>
              Facilities
            </router-link>
          </li>
          <li>
            <p class="sidebar-list-section">Technology</p>
          </li>
          <li>
            <router-link class="sidebar-button" to="/ResearchView.vue">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M4 2.6a.733.733 0 0 0-.733.733v9.334a.6.6 0 1 1-1.2 0V3.333C2.067 2.266 2.932 1.4 4 1.4h8.933a1 1 0 0 1 1 1v8.743a.6.6 0 1 1-1.2 0V2.6H4Z"
                  clip-rule="evenodd" />
                <path fill-rule="evenodd"
                  d="M3.4 11.333a.6.6 0 0 1 .6-.6h9.333a.6.6 0 1 1 0 1.2H4a.6.6 0 0 1-.6-.6ZM3.4 14a.6.6 0 0 1 .6-.6h9.333a.6.6 0 0 1 0 1.2H4a.6.6 0 0 1-.6-.6Z"
                  clip-rule="evenodd" />
                <path fill-rule="evenodd"
                  d="M4 11.933A.733.733 0 1 0 4 13.4a.6.6 0 0 1 0 1.2 1.933 1.933 0 1 1 0-3.867.6.6 0 1 1 0 1.2ZM5.4 4.667a.6.6 0 0 1 .6-.6h4a.6.6 0 1 1 0 1.2H6a.6.6 0 0 1-.6-.6Z"
                  clip-rule="evenodd" />
              </svg>
              Research
            </router-link>
          </li>
          <li>
            <p class="sidebar-list-section">Attack and defense</p>
          </li>
          <li>
            <a class="sidebar-button" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path fill-rule="evenodd"
                  d="m8 3.89 4.655 8.277-4.316-1.68s0 .001 0 0a.934.934 0 0 0-.677 0l-4.317 1.68L8 3.89Zm-5.35 8.547Zm4.537-9.548a.933.933 0 0 1 1.626 0l5.253 9.338c.43.764-.335 1.646-1.152 1.328L8 11.644l-4.915 1.91c-.816.319-1.581-.563-1.151-1.326l5.252-9.34Zm.716 8.717Zm.194 0Z"
                  clip-rule="evenodd" />
              </svg>
              Armory</a>
          </li>
          <li>
            <a class="sidebar-button" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.682 2.158a.6.6 0 0 1 .636 0l2.667 1.667a.6.6 0 0 1-.636 1.017L8.6 3.75V7a.6.6 0 0 1-1.2 0V3.75L5.651 4.841a.6.6 0 1 1-.636-1.017l2.667-1.667ZM8 9.469l-3.964 3.524 3.785-.736a.932.932 0 0 1 .357 0l3.786.736L8 9.469Zm-.62-1.054a.933.933 0 0 1 1.24 0l4.869 4.328c.71.63.134 1.795-.798 1.614L8 13.445l-4.69.912c-.933.18-1.509-.983-.799-1.614L7.38 8.415Z"
                  clip-rule="evenodd" />
              </svg>
              Fleet</a>
          </li>
          <li>
            <p class="sidebar-list-section">Space</p>
          </li>
          <li>
            <a class="sidebar-button" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M8 3.417a4.583 4.583 0 1 0 0 9.166 4.583 4.583 0 0 0 0-9.166ZM1.917 8a6.083 6.083 0 1 1 12.166 0A6.083 6.083 0 0 1 1.917 8Z"
                  clip-rule="evenodd" />
                <path fill-rule="evenodd"
                  d="M13.551 4.603c-.415-.026-1.008.04-1.748.213l-.274-1.168c.793-.186 1.515-.279 2.097-.242.533.033 1.183.193 1.47.766.267.536.051 1.109-.206 1.531-.277.453-.72.934-1.266 1.413-1.097.966-2.713 2.023-4.589 2.958-1.875.935-3.692 1.59-5.123 1.885-.711.146-1.362.211-1.89.16-.493-.049-1.08-.221-1.347-.757-.285-.572-.023-1.186.27-1.631.32-.486.826-1.005 1.449-1.525l.769.921c-.58.485-.988.917-1.216 1.263-.174.265-.191.394-.193.434.031.022.129.075.384.1.358.036.875-.005 1.532-.14C4.973 10.513 6.69 9.901 8.5 9c1.81-.903 3.333-1.905 4.332-2.785.502-.442.846-.83 1.033-1.137.134-.22.15-.33.151-.367-.032-.023-.146-.088-.465-.108Z"
                  clip-rule="evenodd" />
              </svg>
              Galaxy</a>
          </li>
          <li>
            <a class="sidebar-button" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M5.4 6a2.6 2.6 0 1 1 4.427 1.85 3.933 3.933 0 0 1 2.106 3.483V12a.6.6 0 1 1-1.2 0v-.667a2.733 2.733 0 1 0-5.466 0V12a.6.6 0 1 1-1.2 0v-.667c0-1.512.853-2.825 2.105-3.484A2.592 2.592 0 0 1 5.4 6ZM8 4.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8ZM.733 8a1.933 1.933 0 1 1 1.934 1.933 1.4 1.4 0 0 0-1.4 1.4V12a.6.6 0 1 1-1.2 0v-.667c0-.875.432-1.649 1.094-2.12A1.925 1.925 0 0 1 .733 8Zm1.934-.733a.733.733 0 1 0 0 1.466.733.733 0 0 0 0-1.466ZM11.4 8a1.933 1.933 0 1 1 3.439 1.213 2.597 2.597 0 0 1 1.094 2.12V12a.6.6 0 1 1-1.2 0v-.667a1.4 1.4 0 0 0-1.4-1.4A1.933 1.933 0 0 1 11.4 8Zm1.933.733a.733.733 0 1 0 0-1.466.733.733 0 0 0 0 1.466Z"
                  clip-rule="evenodd" />
              </svg>
              Alliance</a>
          </li>
          <li>
            <a class="sidebar-button" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M5.333 8.6a4.067 4.067 0 0 0-4.066 4.067v.666a.6.6 0 0 1-1.2 0v-.666a5.267 5.267 0 1 1 10.533 0v.666a.6.6 0 0 1-1.2 0v-.666A4.067 4.067 0 0 0 5.333 8.6Z"
                  clip-rule="evenodd" />
                <path fill-rule="evenodd"
                  d="M12 6.6a2.733 2.733 0 0 0-2.733 2.733.6.6 0 0 1-1.2 0 3.933 3.933 0 0 1 7.866 0v.334a.6.6 0 1 1-1.2 0v-.334A2.733 2.733 0 0 0 12 6.6ZM2.067 5.333a3.267 3.267 0 1 1 6.533 0 3.267 3.267 0 0 1-6.533 0Zm3.266-2.066a2.067 2.067 0 1 0 0 4.133 2.067 2.067 0 0 0 0-4.133Z"
                  clip-rule="evenodd" />
                <path fill-rule="evenodd"
                  d="M9.4 4a2.6 2.6 0 1 1 5.2 0 2.6 2.6 0 0 1-5.2 0ZM12 2.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Z"
                  clip-rule="evenodd" />
              </svg>
              Friends</a>
          </li>
          <li>

            <a class="sidebar-button" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M9.804.78a.6.6 0 0 1 .323.784L9.434 3.23a.6.6 0 1 1-1.108-.46l.693-1.667a.6.6 0 0 1 .785-.324Zm2.438.004a.6.6 0 0 1 .307.792L10.296 6.68a4.6 4.6 0 1 1-4.872.176L2.796 1.601a.6.6 0 0 1 1.073-.537l2.626 5.253a4.574 4.574 0 0 1 1.047-.229L5.35 1.596a.6.6 0 0 1 1.078-.526l2.482 5.087c.093.018.185.04.275.064l2.265-5.13a.6.6 0 0 1 .791-.307Zm-3.815 6.51h.01a3.4 3.4 0 1 1-.01 0Z"
                  clip-rule="evenodd" />
              </svg>
              Ranking</a>
          </li>
          <li>
            <a class="sidebar-button" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M10.91 10.91a.6.6 0 0 1 .848 0l2.666 2.666a.6.6 0 0 1-.848.848l-2.667-2.666a.6.6 0 0 1 0-.849Z"
                  clip-rule="evenodd" />
                <path fill-rule="evenodd"
                  d="M1.4 7.333a5.933 5.933 0 1 1 11.867 0 5.933 5.933 0 0 1-11.867 0ZM7.333 2.6a4.733 4.733 0 1 0 0 9.467 4.733 4.733 0 0 0 0-9.467Z"
                  clip-rule="evenodd" />
              </svg>
              Search</a>
          </li>
        </div>
        <div class="list-container">
          <div class="switch-container">
            <p class="label-xl content-1">Dark Theme</p>
            <SwitchComponent />
          </div>
          <li>
            <a class="sidebar-button" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <g fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd">
                  <path
                    d="M5.4 8a2.6 2.6 0 1 1 5.2 0 2.6 2.6 0 0 1-5.2 0ZM8 6.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Z" />
                  <path
                    d="M6.74 1.18a.6.6 0 0 1 .58-.447h1.303a.6.6 0 0 1 .58.448l.34 1.29 1.19.49.877-.75a.6.6 0 0 1 .814.031l1.334 1.334a.6.6 0 0 1 .033.811l-.747.884.477 1.152 1.293.329a.6.6 0 0 1 .453.581v1.318a.6.6 0 0 1-.45.581l-1.301.339-.478 1.153.753.888a.6.6 0 0 1-.034.812l-1.333 1.334a.6.6 0 0 1-.825.022l-.037-.033-.1-.09a44.992 44.992 0 0 0-.721-.624l-1.164.482-.329 1.299a.6.6 0 0 1-.581.453H7.333a.6.6 0 0 1-.581-.454l-.328-1.298-1.128-.464-.917.747a.6.6 0 0 1-.803-.04l-1.334-1.334a.6.6 0 0 1-.023-.823l.758-.85-.483-1.145-1.319-.36a.6.6 0 0 1-.442-.58V7.334a.6.6 0 0 1 .464-.584l1.28-.299.469-1.155-.745-.917a.6.6 0 0 1 .041-.802l1.334-1.334a.6.6 0 0 1 .823-.024l.853.76 1.142-.482.346-1.315Zm1.043.753L7.48 3.087a.6.6 0 0 1-.348.4L5.37 4.23a.6.6 0 0 1-.632-.104l-.713-.635-.55.55.627.773a.6.6 0 0 1 .09.605l-.72 1.771a.6.6 0 0 1-.42.358l-1.118.261v.4l1.159.316a.6.6 0 0 1 .395.346l.743 1.762a.6.6 0 0 1-.105.633l-.634.71.55.55.774-.631a.6.6 0 0 1 .607-.09l1.738.715a.6.6 0 0 1 .353.408l.288 1.139H8.2l.288-1.139a.6.6 0 0 1 .352-.407l1.767-.732a.6.6 0 0 1 .579.066 12.881 12.881 0 0 1 .789.655l.543-.544-.632-.745a.6.6 0 0 1-.096-.618l.732-1.767a.6.6 0 0 1 .403-.351l1.142-.297V7.8l-1.133-.288a.6.6 0 0 1-.407-.352l-.732-1.767a.6.6 0 0 1 .097-.617l.627-.742-.551-.55-.735.627a.6.6 0 0 1-.618.1L8.81 3.467a.6.6 0 0 1-.352-.402l-.297-1.133h-.378Z" />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h16v16H0z" />
                  </clipPath>
                </defs>
              </svg>
              Options</a>
          </li>
          <li>

            <a class="sidebar-button background-2" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M10.242 5.576a.6.6 0 0 1 .849 0l2 2a.6.6 0 0 1 0 .848l-2 2a.6.6 0 0 1-.849-.848l.976-.976H8a.6.6 0 0 1 0-1.2h3.218l-.976-.976a.6.6 0 0 1 0-.848Z"
                  clip-rule="evenodd" />
                <path fill-rule="evenodd"
                  d="M2.733 3.333c0-1.067.866-1.933 1.934-1.933h6.666c1.068 0 1.934.866 1.934 1.933V4a.6.6 0 1 1-1.2 0v-.667a.733.733 0 0 0-.734-.733H4.667a.733.733 0 0 0-.734.733v9.334c0 .405.329.733.734.733h6.666a.733.733 0 0 0 .734-.733V12a.6.6 0 0 1 1.2 0v.667a1.933 1.933 0 0 1-1.934 1.933H4.667a1.933 1.933 0 0 1-1.934-1.933V3.333Z"
                  clip-rule="evenodd" />
              </svg>
              Log out</a>
          </li>
        </div>
      </ul>
    </div>
  </nav>
</template>

<style>
.sidebar {
  height: -webkit-fill-available;
  background-color: var(--background-1);
  width: 280px;
  padding: 24px;
  grid-column: 1;
  grid-row: span 2;
  overflow-y: auto;
  margin: 12px;
  border: 1px solid var(--border-1);
  border-radius: var(--border-radius-s);
  box-shadow: var(--box-shadow-color) 0px 8px 24px;
}

.sidebar-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  height: 100%;
}

.navbar-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.icon-desktop {
  display: block;
}

.icon-mobile {
  display: none;
}

.close-menu {
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 8px;
  width: 48px;
  height: 48px;
  background-color: var(--background-2);
  border-radius: 16px;
}

.planet-user {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 16px;
  padding: 16px;
  width: -webkit-fill-available;
  border-radius: var(--border-radius-s);
  border: 0.5px solid var(--border-1);
  background-color: var(--background-1);
  cursor: pointer;
}

.planet-user:hover {
  background-color: var(--background-hover);
}

.container-planet {
  text-align: left;
}

.avatar-username {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
}

.list-container {
  width: 100%;
}

.sidebar-button {
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 8px;
  border-radius: var(--border-radius-s);
}

.sidebar-button:hover {
  background-color: var(--background-hover);
}

.router-link-exact-active {
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 8px;
  color: var(--content-focus);
  background-color: var(--background-focus);
  border-radius: var(--border-radius-s);
}

.router-link-exact-active svg {
  fill: var(--content-focus);
}

.sidebar-list-section {
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 16px;
  font-family: var(--font-family);
  font-size: 0.88rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  color: var(--content-2);
}

.header {
  background-color: var(--background-1);
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  display: none;
}

.hamburguer-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 8px;
  width: 48px;
  height: 48px;
  background-color: var(--background-2);
  border-radius: 16px;
}

.switch-container {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 8px 16px;
  width: -webkit-fill-available;
  border-radius: var(--border-radius-s);
  border: 0.5px solid var(--border-1);
  background-color: var(--background-1);
  margin: 4px 0;
}

/* Medium screen (640px - 1024px) */
@media screen and (min-width: 641px) and (max-width: 1024px) {

  .sidebar {
    padding: 16px;
    width: 208px;
  }

  .avatar-username {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

}

/* Small screen (< 640px) */
@media screen and (max-width: 640px) {

  .sidebar {
    width: -webkit-fill-available;
    padding: 16px;
    display: none;
    position: fixed;
    top: 0px;
    height: 100dvh;
  }

  .sidebar ul{
    padding-bottom: 24px;
  }

  .sidebar-container {
    gap: 24px;
  }

  .icon-desktop {
    display: none;
  }

  .icon-mobile {
    display: block;
  }

  .close-menu {
    display: flex;
  }

  .planet-user {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }

  .avatar-username {
    gap: 8px;
  }

  .header {
    display: flex;
    flex-direction: row;
    position: sticky;
    top: 0;
  }
}
</style>

<script>

import SwitchComponent from '@/components/SwitchComponent.vue'

export default {
  name: 'SidebarComponent',
  components: {
    SwitchComponent,
  },
  methods: {
    openMenu() {
      if (window.innerWidth <= 640) {
        // Cambia la propiedad display a 'inline' cuando se hace clic en el icono de menú
        this.$refs.nav.style.display = 'inline';
      }
    },
    closeMenu() {
      if (window.innerWidth <= 640) {
        // Cambia la propiedad display a 'none' cuando se hace clic en el icono de cerrar
        this.$refs.nav.style.display = 'none';
      }
    }
  }

}
</script>
