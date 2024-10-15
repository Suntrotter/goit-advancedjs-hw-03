import{S as l,i as c}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const u="46490288-24919c30ba7303f136305d546",p="https://pixabay.com/api/";function f(s){const o=new URLSearchParams({key:u,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${p}?${o}`;return console.log("Fetching:",i),fetch(i).then(t=>{if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return t.json()})}new l(".gallery-link",{captionDelay:250,captionsData:"alt"});function m(s){return s.map(({webformatURL:o,largeImageURL:i,tags:t,likes:e,views:r,comments:n,downloads:a})=>`<li class='gallery-item'>
        <a class="gallery-link" href="${i}" >
		<img
			class="gallery-image"
			src="${o}"
			alt="${t}"
            width='358'
            height='200'
			/>
	</a>
    <ul class='img-info'>
    <li><p>Likes</p><p>${e}</p></li>
    <li><p>Views</p><p>${r}</p></li>
    <li><p>Comments</p><p>${n}</p></li>
    <li><p>Downloads</p><p>${a}</p></li>
    </ul>
</li>`).join("")}let h=document.querySelector(".gallery");const d=document.querySelector(".form");d.addEventListener("submit",g);function g(s){s.preventDefault();const o=s.currentTarget,i=o.elements.search.value.trim();f(i).then(t=>{t.total===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),h.innerHTML=m(t.hits)}).catch(console.error).finally(o.reset())}
//# sourceMappingURL=index.js.map
