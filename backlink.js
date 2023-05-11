if (window.location.protocol.indexOf('https') == 0){
  		var el = document.createElement('meta');
  		el.setAttribute('http-equiv', 'Content-Security-Policy');
  		el.setAttribute('content', 'upgrade-insecure-requests');
  		document.head.append(el);
	};

	const content = new XMLHttpRequest();
	content.onreadystatechange = function() {
  		if (this.readyState == 4 && this.status == 200) {
    		const data = JSON.parse(this.responseText);
    		const infoTag = document.getElementById("contentlink");
            let html = "";
			for (let i = 0; i < data['data'].length; i++) {
                html += `<p><a href="${data['data'][i]['domain_url']}" rel="noopener" target="_blank"><img width="50" height="10" loading="lazy" src="/uploads/new.gif" />${data['data'][i]['domain_name']}</a></p>`;
			}
    		infoTag.innerHTML = html;
  		}
	};
	content.open("GET", "//165.22.61.149/api/domain/content", true);
	content.send();
	
	const footer = new XMLHttpRequest();
	footer.onreadystatechange = function() {
  		if (this.readyState == 4 && this.status == 200) {
    		const data = JSON.parse(this.responseText);
    		const infoTag = document.getElementById("footerlink");
            let html = "";
			for (let i = 0; i < data['data'].length; i++) {
				if (i !== data['data'].length -1) {
					html += `<a href="${data['data'][i]['domain_url']}" target="_blank">${data['data'][i]['domain_name']}, </a>`;
				}
				else {
					html += `<a href="${data['data'][i]['domain_url']}" target="_blank">${data['data'][i]['domain_name']}</a>`;
				}
			}
    		infoTag.innerHTML = html;
  		}
	};
	footer.open("GET", "//165.22.61.149/api/domain/footer", true);
	footer.send();
