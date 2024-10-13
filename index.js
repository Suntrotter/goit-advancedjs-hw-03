import{S as l,i as c}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u="46490288-24919c30ba7303f136305d546",p="https://pixabay.com/api/";function f(i){const t=new URLSearchParams({key:u,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}?${t}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}new l(".gallery-link",{captionDelay:250,captionsData:"alt"});function m(i){return i.map(({webformatURL:t,largeImageURL:o,tags:s,likes:e,views:r,comments:n,downloads:a})=>`<li class='gallery-item'>
        <a class="gallery-link" href="${o}" >
		<img
			class="gallery-image"
			src="${t}"
			alt="${s}"
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
</li>`).join("")}let h=document.querySelector(".gallery");const d=document.querySelector(".form");d.addEventListener("submit",g);function g(i){i.preventDefault();const t=i.currentTarget,o=t.elements.search.value.trim();f(o).then(s=>{s.total===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),h.innerHTML=m(s.hits)}).catch(console.error).finally(t.reset())}
//# sourceMappingURL=index.js.map
