tailwind.config = {
	theme: {
		extend: {
			colors: {
				primary: '#702aea',
				secondary: '#fc2f70',
				theme1: '#fc2f70a9',
				theme2: '#2ffcbb',
			},
		},
	},
};

// hamburgger toggle
document.getElementById('menu-toggle').addEventListener('click', function () {
	var menu = document.getElementById('nav-menu');
	menu.classList.toggle('hidden'); // Show/hide the menu on small screens
});

// Automate Email
let UserId = 'gkCyWkrtqpdiyI563';
let ServiceId = 'service_s28txk3';
let TemplateId = 'template_vx41o2j';

(function () {
	emailjs.init(UserId);
})();

document
	.getElementById('contact-form')
	.addEventListener('submit', function (event) {
		event.preventDefault(); // Prevent default form submission
		emailjs.sendForm(ServiceId, TemplateId, this).then(
			function () {
				alert('Your message has been sent!');
			},
			function (error) {
				console.log(error);
			},
		);
	});
