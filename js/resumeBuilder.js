var bio = { // bio object to add to page
	"name": "Tyler",
	"role": "Web Developer",
	"contacts": {
		"mobile": "480-825-8705",
		"email": "tylermdespain@gmail.com",
		"github": "thewhitedingo",
		"twitter": "whitedingo",
		"location": "San Tan Valley, AZ "
	},
	"welcomeMessage": "Welcome to my online resume. You'll find what you need here. Feel free to contact me with questions.",
	"skills": [
		"HTML", "CSS", "Javascript", "Jquery", "Determination", "Discipline"
	],
	"bioPic": "images/me.jpg",

// display method to add the JSON data to the webpage
	display : function() {
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
			$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
			$("#header").prepend(formattedName);
		var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
			$("#header").prepend(formattedImage);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
			$("#topContacts:last").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
			$("#topContacts:last").append(formattedEmail);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
			$("#topContacts:last").append(formattedTwitter);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
			$("#topContacts:last").append(formattedGithub);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
			$("#topContacts:last").append(formattedLocation);
		
		$("#header").append(HTMLskillsStart);
		
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills:last").append(formattedSkill);
		};
		
		var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
			$("#header").append(formattedMessage);
		}
}

bio.display();

var education = {
	"schools": [
		{
			"name": "Poston Butte High School",
			"degree": " HS Diploma",
			"location": "San Tan Valley, AZ",
			"date": "2009-2012",
			"major": "Generals",
		},
		{
			"name": "Norther Arizona University",
			"degree": " ",
			"location": "Flagstaff, AZ",
			"date": "2012-2013",
			"major": "1 Year Generals",
		},
	],
	"onlineCourses": [
		{
			"name": "Front-End Web Developer",
			"school": "Udacity",
			"date": "Winter 2015",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
		},
	],
	display : function () {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedNameDegree = formattedName + formattedDegree;
				$(".education-entry:last").append(formattedNameDegree);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
				$(".education-entry:last").append(formattedLocation);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
				$(".education-entry:last").append(formattedDates);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
				$(".education-entry:last").append(formattedMajor);
		};
		$("#education").append(HTMLonlineClasses);

		for (course in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);

			var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].name);
			var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var onlineTitleSchool = onlineTitle + onlineSchool;
				$(".education-entry:last").append(onlineTitleSchool);
			var onlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
				$(".education-entry:last").append(onlineDate);
			var onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
				$(".education-entry:last").append(onlineURL);
		};
	}
}
HTMLschoolDegree
education.display();

var work = {
	"jobs": [
		{
			"employer": "Florence Unified School District",
			"title": "Bus Driver",
			"dates": "May 2015 to Present",
			"location": "San Tan Valley, AZ",
			"description": "Operated a school bus to transport children to and from school and school events."
		},
		{
			"employer": "Lauren's Institute for Education",
			"title": "Habilitation and Respite Provider",
			"dates": "June 2013 to October 2014",
			"location": "Mesa, AZ",
			"description": "Provided individual learning, and occasional care, of several autistic children."
		},
		{
			"employer": "The Church of Jesus Christ of Latter-day Saints",
			"title": "Missionary",
			"dates": "June 2013 to October 2014",
			"location": "San Diego, CA",
			"description": "Facilited the growth of the LDS church in the San Diego area by street-contacting people\
			and providing information about the church, teaching lessons on church history and doctrine, and finding\
			interested people through a variety of means."
		},
		{
			"employer": "Fry's Food and Drug",
			"title": "Courtesy Clerk",
			"dates": "September 2011 through February 2013",
			"location": "San Tan Valley, AZ",			
			"description": "Provided customer service and maintenance in order to help keep a friendly and clean store."
		}
	],
	display : function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
				$(".work-entry:last").append(formattedEmployer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
				$(".work-entry:last").append(formattedTitle);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
				$(".work-entry:last").append(formattedLocation);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
				$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
				$(".work-entry:last").append(formattedDescription);
		};
	 }
}

work.display();

var projects = {
	"projects": [
		{ 
			"title": "eLeagues",
			"dates": "October 2015 though January 2016",
			"description": "A website dedication to helping set up local esports leagues for children.",
			"images": ""
		},
		{
			"title": "Portfolio",
			"dates": "October 2015 through November 2015",
			"description": "A website to display the projects that I have completed and am currently working on.",
			"images": ""
		}
	],
	display : function() {
		$("#projects").append(HTMLprojectStart);
		
		for (project in projects.projects) {

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
				$(".project-entry").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
				$(".project-entry").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
				$(".project-entry").append(formattedDescription);

			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project]) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry").append(formattedImage);
				};
			};
		};
	}
}

projects.display();

$("#mapDiv").append(googleMap);
