import"./assets/styles-B9WT2k9g.js";import{S as p}from"./assets/vendor-CgTBfC_f.js";const t=[{preview:"https://picsum.photos/id/1015/360/200.jpg",original:"https://picsum.photos/id/1015/1280/800.jpg",description:"Mountain River"},{preview:"https://picsum.photos/id/1016/360/200.jpg",original:"https://picsum.photos/id/1016/1280/800.jpg",description:"Forest Landscape"},{preview:"https://picsum.photos/id/1018/360/200.jpg",original:"https://picsum.photos/id/1018/1280/800.jpg",description:"Mountain View"},{preview:"https://picsum.photos/id/1020/360/200.jpg",original:"https://picsum.photos/id/1020/1280/800.jpg",description:"Bear in Nature"},{preview:"https://picsum.photos/id/1024/360/200.jpg",original:"https://picsum.photos/id/1024/1280/800.jpg",description:"Eagle"},{preview:"https://picsum.photos/id/1035/360/200.jpg",original:"https://picsum.photos/id/1035/1280/800.jpg",description:"Sea Coast"},{preview:"https://picsum.photos/id/1039/360/200.jpg",original:"https://picsum.photos/id/1039/1280/800.jpg",description:"Waterfall"},{preview:"https://picsum.photos/id/1043/360/200.jpg",original:"https://picsum.photos/id/1043/1280/800.jpg",description:"Lake and Mountains"},{preview:"https://picsum.photos/id/1050/360/200.jpg",original:"https://picsum.photos/id/1050/1280/800.jpg",description:"Ocean View"}],s=document.querySelector(".gallery"),o=t.map(i=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${i.original}">
          <img
            class="gallery-image"
            src="${i.preview}"
            alt="${i.description}"
          />
        </a>
      </li>
    `).join("");s.insertAdjacentHTML("beforeend",o);new p(".gallery .gallery-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
