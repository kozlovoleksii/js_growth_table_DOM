var e=document.querySelector(".append-row"),t=document.querySelector(".remove-row"),r=document.querySelector(".append-column"),d=document.querySelector(".remove-column"),n=document.querySelector("tbody");e.addEventListener("click",function(r){r.target&&function(){var r=document.createElement("tr"),d=document.querySelectorAll("tr:first-child td").length,l=n.querySelectorAll("tr").length;if(l>=10){e.disabled=!0;return}for(var c=0;c<d;c++){var o=document.createElement("td");r.append(o)}n.append(r),l+1>=10&&(e.disabled=!0),t.disabled=!1}()}),t.addEventListener("click",function(r){r.target&&function(){var r=n.querySelectorAll("tr").length;if(r<=2){t.disabled=!0;return}n.querySelector("tr").remove(),r-1<=2&&(t.disabled=!0),e.disabled=!1}()}),r.addEventListener("click",function(e){e.target&&function(){var e=document.querySelectorAll("tr:first-child td").length;if(e>=10){r.disabled=!0;return}document.querySelectorAll("tr").forEach(function(e){var t=document.createElement("td");e.append(t)}),e+1>=10&&(r.disabled=!0),d.disabled=!1}()}),d.addEventListener("click",function(e){e.target&&function(){var e=document.querySelectorAll("tr:first-child td").length;if(e<=2){d.disabled=!0;return}document.querySelectorAll("tr").forEach(function(e){e.querySelector("td").remove()}),e-1<=2&&(d.disabled=!0),r.disabled=!1}()});
//# sourceMappingURL=index.0e8103fe.js.map