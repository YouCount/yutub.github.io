function idClickListener(e,t){document.getElementById(e).addEventListener("click",t)}function queryClickListener(e,t){document.querySelectorAll(e).forEach(function(e){e.addEventListener("click",t)})}function fx(e){var t=document.getElementById(e),n=0,a=1,o=1;return fx.transition=function(e,t,a,i){for(var s=e,l=0;l<o;l++)setTimeout(function(){s+=Number((t-n)/o),i(s)},50*(l+1))},fx.fadeIn=function(e){var n;o=(n=e||400)/50,"none"===window.getComputedStyle(t).getPropertyValue("display")&&(t.dataset.fxDisplay?t.style.display=t.dataset.fxDisplay:t.style.display="block",a=t.dataset.fxOpacity||Number(t.style.opacity)||1,t.style.opacity=0,fx.transition(0,a,1,function(e){t.style.opacity=e},n),setTimeout(function(){t.style.opacity=1}))},fx.fadeOut=function(e){var i;o=(i=e||400)/50,"none"!==window.getComputedStyle(t).getPropertyValue("display")&&(t.dataset.fxDisplay=window.getComputedStyle(t).getPropertyValue("display"),a=t.style.opacity?Number(t.style.opacity):1,t.dataset.fxOpacity=a,n=a,fx.transition(a,0,-1,function(e){t.style.opacity=e},i),setTimeout(function(){t.style.display="none",t.style.opacity=t.dataset.fxOpacity}))},fx}function tutorial(e){navState[0]&&handleNavButtons(navState[0]);var t;t=e||0,isTutorialOn=1,window.scrollTo(0,0);var n=0;switch(t){case 0:document.getElementById("username").value="",document.getElementById("input").style.zIndex="1004",document.getElementById("tutorial").style.display="block",n=document.getElementById("username").getBoundingClientRect().bottom,document.getElementById("tutorial").style.top=n+35+"px",document.getElementById("bg2").style.display="block",document.getElementById("tutStep1").style.display="block",document.getElementById("tutStep2").style.display="none";break;case 1:document.getElementById("tutStep1").style.display="none",document.getElementById("tutStep2").style.display="block",n=document.getElementById("username").getBoundingClientRect().bottom,document.getElementById("tutorial").style.top=n+35+"px";break;case 2:document.getElementById("tutStep1").style.display="none",document.getElementById("tutStep2").style.display="block",document.getElementById("suggest").style.zIndex="1004",n=document.getElementById("suggest").getBoundingClientRect().bottom,document.getElementById("tutorial").style.top=n+35+"px",document.getElementById("bg2").style.display="block";break;case 3:document.getElementById("tutorial").style.display="none",document.getElementById("bg2").style.display="none",document.getElementById("input").style.zIndex="50",document.getElementById("suggest").style.zIndex="51",isTutorialOn=0}}function shareFunc(e){var t=200;if(!(!0!==e&&shareswitch<2)){var n=document.querySelectorAll(".share");switch(shareswitch){case 0:shareswitch=1,n.forEach(function(e,n){setTimeout(function(){fx(e.id).fadeIn(t)},40*(n-1))}),setTimeout(function(){shareswitch=2},t+40*n.length);break;case 1:break;case 2:shareswitch=1,navState[0]=0,n.forEach(function(e){fx(e.id).fadeOut(t)}),setTimeout(function(){shareswitch=0},t+40*n.length)}}}function handleNavButtons(e){if(!navState[1])if(0!==navState[0])switch(navState[1]=1,document.getElementById("bg1").style.height="100%",document.getElementById("bg1").classList.add("ball"),document.getElementById("mainPage").style.display="block",navState[0]===e?setTimeout(function(){navState=[0,0]},500):setTimeout(function(){navState=[0,0],handleNavButtons(e)},500),navState[0]){case 2:document.getElementById("helpArt").style.display="none",document.querySelector('.navButtonsCover[data-child="helpButton"]').style.backgroundColor="transparent";break;case 3:document.getElementById("codeArt").style.display="none",document.querySelector('.navButtonsCover[data-child="code"]').style.backgroundColor="transparent"}else switch(e){case 1:location.hash&&(location.href=location.href.split(location.hash)[0]),navState[0]=1;break;case 2:document.getElementById("bg1").classList.remove("ball"),document.querySelector('.navButtonsCover[data-child="helpButton"]').style.backgroundColor="rgba(0,0,0,0.5)",setTimeout(function(){fx("helpArt").fadeIn(500),document.getElementById("bg1").style.height="auto",document.getElementById("mainPage").style.display="none"},500),setTimeout(function(){navState[1]=0},1e3),navState=[2,1];break;case 3:document.getElementById("bg1").classList.remove("ball"),document.querySelector('.navButtonsCover[data-child="code"]').style.backgroundColor="rgba(0,0,0,0.5)",setTimeout(function(){fx("codeArt").fadeIn(500),document.getElementById("bg1").style.height="auto",document.getElementById("mainPage").style.display="none"},500),setTimeout(function(){navState[1]=0},1e3),navState=[3,1];break;case 4:shareFunc(!0),navState[0]=4}}function trigenter(e){13===e.keyCode&&getValue()}function linkshare(){fx("pageUrl").fadeIn(250),fx("bg2").fadeIn(500)}function pushViews(e,t){ajx(e,function(e){views[t]=e.items[0].statistics.viewCount,t===2*vids-1&&upCharts()})}function extrabutton(){if(0===firstload){if(!internet||notFound||isTutorialOn)return;document.getElementById("showextra").innerHTML="LOADING...";var e=username.length>=24&&"UC"===username.substr(0,2).toUpperCase()?"id":"forUsername",t="https://www.googleapis.com/youtube/v3/channels?part=contentDetails&"+e+"="+username+"&fields=items/contentDetails/relatedPlaylists/uploads&key="+getKey();try{ajx(t,function(t){if(t.items[0].contentDetails.relatedPlaylists.uploads){var n="https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId="+t.items[0].contentDetails.relatedPlaylists.uploads+"&maxResults=50&fields=items/snippet/resourceId/videoId&key="+getKey();ajx(n,function(t){if(t.items){for(var n=0;t.items[n];n++)pushViews("https://www.googleapis.com/youtube/v3/videos?part=statistics&id="+t.items[n].snippet.resourceId.videoId+"&fields=items/statistics/viewCount&key="+getKey(),n);getScript("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.js",function(){isChart=1,fx("showextra").fadeOut(),fx("hideextra").fadeIn(),extraswitch=1;for(var t=[],a=[],o=0;n<vids;o++)t[o]=views[o],a[o]="";var i={labels:a,datasets:[{label:"Views of last"+vids+" videos",fill:!1,borderColor:"rgba(255,50,50,0.5)",pointBorderColor:"rgba(255,50,50,0.5)",pointBackgroundColor:"rgba(255,50,50,1)",data:t}]};myLineChart2=new Chart(document.getElementById("myChart2").getContext("2d"),{type:"line",data:i,gridLines:{display:!1},responsive:!0,maintainAspectRatio:!1});var s=[function(){for(var e=0,t=0;t<vids;t++)e+=Number(views[t]);return e}(),function(){for(var e=0,t=vids;t<2*vids;t++)e+=Number(views[t]);return e}()],l=[Math.floor(s[0]/vids),Math.floor(s[1]/vids)],d={labels:["last "+vids+" videos","last to last "+vids+" videos"],datasets:[{label:"Average Views",borderColor:["rgba(0,0,255,1)","rgba(0,255,0,1)"],backgroundColor:["rgba(50,50,255,0.2)","rgba(50,255,50,0.2)"],hoverBackgroundColor:["rgba(0,0,255,1)","rgba(0,255,0,1)"],data:l}]};myLineChart3=new Chart(document.getElementById("myChart3").getContext("2d"),{type:"bar",data:d,gridLines:{display:!1},responsive:!0,maintainAspectRatio:!1});var r={labels:["last"+vids+" videos (total views)","last to last "+vids+" videos (total views)"],datasets:[{label:"Total Views",borderColor:["rgba(0,0,255,1)","rgba(0,255,0,1)"],backgroundColor:["rgba(50,50,255,0.2)","rgba(50,255,50,0.2)"],hoverBackgroundColor:["rgba(0,0,255,1)","rgba(0,255,0,1)"],data:[s[0],s[1]]}]};myLineChart4=new Chart(document.getElementById("myChart4").getContext("2d"),{type:"doughnut",data:r,gridLines:{display:!1},responsive:!0,maintainAspectRatio:!1});var u="https://www.googleapis.com/youtube/v3/channels?part=statistics&"+e+"="+username+"&fields=items/statistics(videoCount,viewCount)&key="+getKey();ajx(u,function(e){e.items[0].statistics.videoCount&&e.items[0].statistics.viewCount?(changeText(document.getElementById("totalVideos"),e.items[0].statistics.videoCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),changeText(document.getElementById("totalViews"),e.items[0].statistics.viewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))):noConnection("3. undef b.items[0].statistics.videoCount or b.items[0].statistics.viewCount in extrabutton(script.js)")})})}else noConnection("2. undef e.items in extrabutton(script.js)")})}else noConnection("1. undef e.items[0].contentDetails.relatedPlaylists.uploads in extrabutton(script.js)")},noConnection)}catch(e){noConnection(e)}setTimeout(function(){document.getElementById("extraContent").style.display="block"},250),firstload=1}else document.getElementById("showextra").innerHTML="SHOW STATS",0===extraswitch?(isChart=1,fx("showextra").fadeOut(),fx("hideextra").fadeIn(),setTimeout(function(){document.getElementById("extraContent").style.display="block"}),extraswitch=1):(myLineChart1.destroy(),fx("showextra").fadeIn(),fx("hideextra").fadeOut(100),setTimeout(function(){document.getElementById("extraContent").style.display="none"}),extraswitch=0,isChart=0)}function upCharts(){if(!(Number(document.getElementById("vids").value)>25)){vids=Number(document.getElementById("vids").value);for(var e=0,t=0,n=0;n<vids;n++)myLineChart2.data.labels[n]="",myLineChart2.data.datasets[0].data[n]=views[n],e+=Number(views[n]);for(n=vids;n<2*vids;n++)t+=Number(views[n]);myLineChart2.data.labels.splice(vids),myLineChart2.data.datasets[0].data.splice(vids),myLineChart2.data.datasets[0].label="Views of last "+vids+" videos",myLineChart3.data.labels=["last "+vids+" videos","last to last "+vids+" videos"],myLineChart3.data.datasets[0].data[0]=Math.floor(e/vids),myLineChart3.data.datasets[0].data[1]=Math.floor(t/vids),myLineChart4.data.labels=["last "+vids+" videos (total views)","last to last "+vids+" videos (total views)"],myLineChart4.data.datasets[0].data[0]=e,myLineChart4.data.datasets[0].data[1]=t,myLineChart2.update(),myLineChart3.update(),myLineChart4.update()}}var shareswitch=0,navState=[0,0],views=[],extraswitch=0,myLineChart2,myLineChart3,myLineChart4,vids=5;developmentMode||(window.top!==window.self||window.top.location!==window.self.location?window.top.location=window.self.location:"youcount.github.io"===window.location.hostname&&"youcount.github.io"===window.top.location.hostname||(window.location.hostname="youcount.github.io"));var emailParts=["manas.khurana20","gmail","com","&#46;","&#64;"];document.getElementById("email").innerHTML=emailParts[0]+emailParts[4]+emailParts[1]+emailParts[3]+emailParts[2],document.getElementById("email").href="mailto:"+document.getElementById("email").innerHTML;var clickList=[["fb",function(){window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(document.querySelector("#pageUrl input").getAttribute("value")),"_blank")}],["tw",function(){window.open("https://twitter.com/share?text="+document.getElementById("username").value+" now has  "+actualCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+" subscribers!&url= "+encodeURIComponent(document.querySelector("#pageUrl input").getAttribute("value"))+"&hashtags=YouCount","_blank")}],["lnkdIn",function(){window.open("https://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(document.querySelector("#pageUrl input").getAttribute("value"))+"&title="+encodeURIComponent(channelname)+"'s%20Live%20Subscriber%20Count&source=YouCount","_blank")}],["tb",function(){window.open("http://www.tumblr.com/share/link?url="+encodeURIComponent(document.querySelector("#pageUrl input").getAttribute("value")),"_blank")}],["rdit",function(){window.open("http://www.reddit.com/submit?url="+encodeURIComponent(document.querySelector("#pageUrl input").getAttribute("value"))+"&title="+encodeURIComponent(channelname)+"s%20Live%20Subscriber%20Count","_blank")}],["link",linkshare],["bg2",function(){isTutorialOn?tutorial(3):(fx("pageUrl").fadeOut(250),fx("bg2").fadeOut(500))}]];clickList.forEach(function(e){idClickListener(e[0],e[1])}),queryClickListener("#input button",getValue),queryClickListener(".suggest",function(e){if(e.target.dataset.id){username=e.target.dataset.id;var t="https://www.googleapis.com/youtube/v3/channels?part=snippet&id="+e.target.dataset.id+"&fields=items/snippet&key=";queryName(t)}}),["showextra","hideextra"].forEach(function(e){idClickListener(e,extrabutton)}),isTutorialOn&&tutorial(),queryClickListener("body",shareFunc),document.getElementById("username").addEventListener("focusin",function(){isTutorialOn&&(document.getElementById("username").value="",tutorial(1)),document.getElementById("username").select()}),document.getElementById("username").addEventListener("focusout",function(){setTimeout(function(){document.getElementById("suggest").style.display="none"},200)}),document.getElementById("username").addEventListener("keyup",function(){var e=document.getElementById("username").value.trim();if(internet){if(!e||"Not Found!"===e||"Loading..."===e||"Refresh the page"===e)return document.getElementById("suggest").style.display="none",void(isTutorialOn&&tutorial(1));document.getElementById("suggest").style.display="block",ajx("https://www.googleapis.com/youtube/v3/search?part=snippet&q="+encodeURIComponent(e)+"&type=channel&maxResults=5&relevanceLanguage=en&key="+getKey(),function(e){try{if(!e.items)return void noConnection("undef e.items in username keyup (script.js)");if(e.pageInfo.totalResults<1)return;var t=document.querySelectorAll(".suggest");t.forEach(function(e){e.style.display="block"}),document.querySelectorAll(".suggest div").forEach(function(n,a){try{n.dataset.id=e.items[a].snippet.channelId.trim(),n.textContent=e.items[a].snippet.title}catch(e){t[a].style.display="none"}}),document.querySelectorAll(".suggestImg").forEach(function(n,a){try{n.dataset.id=e.items[a].snippet.channelId.trim(),n.src=e.items[a].snippet.thumbnails.default.url}catch(e){t[a].style.display="none"}})}catch(e){noConnection(e)}},noConnection),isTutorialOn&&tutorial(2)}else document.getElementById("username").value="Refresh the page"});for(var l=50;l>0;l--)views.push(l);if(internet)for(var images=document.getElementsByTagName("img"),pl=0;pl<images.length;pl++)!images[pl].src&&images[pl].id&&"dp"!==images[pl].id&&(images[pl].src="/images/"+images[pl].id+".png");
