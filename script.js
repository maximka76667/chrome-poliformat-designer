// // Apps
const appsIcon = `
<div class='Mrphs-sitesNav__menuitem view-all-sites-btn'>
<a href='javascript:void(0);' id='viewAllSites' title='Ver todos los sitios'    aria-haspopup='true'    aria-expanded='false'  >   
 <i class='icon-sakai--grid-3x3 all-sites-icon' aria-hidden='true'></i>  
   <span class='all-sites-label'>Sitios</span>
     </a>
     </div>`;
// // Name
// <ul id="loginLinks" class="Mrphs-userNav">
//   <li
//     class="pasystem-banner-alert-toggle-list-item"
//     style="top: 103.8px; display: none;"
//   >
//     <a href="javscript:void(0)" class="pasystem-banner-alert-toggle">
//       Mostrar alertas del sistema
//     </a>
//   </li>

//   <li class="Mrphs-userNav__popup js-toggle-user-nav">
//     <a
//       id="loginUser"
//       href="javascript:void(0);"
//       title="Maxim Menú del perfil. Incluye la opción para salir."
//       aria-haspopup="true"
//       aria-expanded="true"
//       class="Mrphs-userNav__drop-btn no-avatar Mrphs-userNav__submenuitem--userlink  current-site "
//     >
//       <span class="Mrphs-userNav__submenuitem--username">Maxim</span>
//       <span class="Mrphs-userNav__submenuitem--userid">y7135892</span>
//     </a>

//     <ul class="Mrphs-userNav__subnav">
//       <li class="Mrphs-userNav__submenuitem Mrphs-userData">
//         <div class="Mrphs-userNav__submenuitem--profile-and-image"></div>
//         <div class="Mrphs-userNav__submenuitem--fullname-and-id">
//           <div class="Mrphs-userNav__submenuitem--fullname">
//             Maxim Grivennyy
//           </div>
//           <div class="Mrphs-userNav__submenuitem--displayid">y7135892</div>
//         </div>
//       </li>

//       <li class="Mrphs-userNav__submenuitem Mrphs-userNav__submenuitem-indented">
//         <a
//           href="https://poliformat.upv.es/portal/site/%7Ey7135892/page/5930cd26-5143-4edb-a647-e133b2963ad8"
//           class="Mrphs-userNav__submenuitem--calendar"
//         >
//           <span>Calendario</span>
//         </a>
//       </li>

//       <li class="Mrphs-userNav__submenuitem Mrphs-userNav__submenuitem-indented">
//         <a
//           href="https://poliformat.upv.es/portal/site/%7Ey7135892/page/eb7163de-453f-49cf-852f-917648104251"
//           class="Mrphs-userNav__submenuitem--prefs"
//         >
//           <span>Preferencias</span>
//         </a>
//       </li>

//       <li class="Mrphs-userNav__submenuitem Mrphs-userNav__submenuitem-indented">
//         <a
//           id="tutorialLink"
//           href="#"
//           onclick="startTutorial({});"
//           class="Mrphs-userNav__submenuitem--tutorial"
//           aria-haspopup="dialog"
//         >
//           <span>Tutorial</span>
//         </a>
//       </li>

//       <li class="Mrphs-userNav__submenuitem Mrphs-userNav__submenuitem-indented Mrphs-userNav__submenuitem-toggle">
//         <label for="sakai-darkThemeSwitcher" class="sakaiThemeSwitch">
//           Modo oscuro
//         </label>
//         <button
//           role="switch"
//           aria-checked="false"
//           id="sakai-darkThemeSwitcher"
//           class="Mrphs-userNav__submenuitem--themeSwitcher switch"
//         >
//           <span>Off</span>
//           <span>On</span>
//         </button>
//       </li>

//       <li class="Mrphs-userNav__logout Mrphs-userNav__submenuitem-indented">
//         <div id="loginLinksImage" class="Mrphs-loginUser">
//           <p class="Mrphs-loginUser__menuitem">
//             <a
//               href="https://poliformat.upv.es/portal/logout"
//               title="Salir"
//               id="loginLink1"
//               class="Mrphs-loginUser__message"
//               data-warning=""
//             >
//               <i class="login-Icon"></i>
//               <span class="Mrphs-login-Message">Salir</span>
//             </a>
//           </p>
//         </div>
//       </li>
//     </ul>
//   </li>
// </ul>;

// Hide sidebar by default
const toggleLi = document.querySelector("#toolsNav-toggle-li");
toggleLi.classList.remove("max");
toggleLi.classList.add("min");

const toggleLiButton = toggleLi.querySelector('button[type="button"]');
toggleLiButton.classList.remove("max");
toggleLiButton.classList.add("min");

// Insert important header buttons into sidebar
// const sidebarContent = document.querySelector("#toolSubsitesContainer");
// sidebarContent.innerHTML += appsIcon;

// appsIcon;

// console.log(appsIcon);

const body = document.querySelector(".Mrphs-portalBody");
body.classList.add("Mrphs-toolMenu-collapsed");
