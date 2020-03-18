import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
	en: {
		polymodeSwitch: "Second metronome",
		tapToChoose: "Tap to choose",
		appDescription:
			"Polymetro is a simple metronome that can play polyrhythms. Make sure your phone is NOT in silent mode.  Turn on the second metronome to practice polyrhythms!",
		appInstruction:
			"Tap on the circles to toggle accents. To change the rhythm, tap the numbers to select the rhythm you want.",
		install: "Installation",
		installDescription:
			"This webapp can be installed as an app on your phone",
		chrome:
			"Click on the menu icon and in the menu 'Add to home screen'.",
		firefox:
			"In the address bar, to the right of the page URL you should see a little house icon with a plus symbol in the middle. Click on it and '+ Add to home screen'.",
		safari:
			"Click on the share button (box with up arrow) and in the opening popup 'Add to Home Screen'."
	},
	de: {
		polymodeSwitch: "Zweites Metronom",
		tapToChoose: "Tippen zum Wählen",
		appDescription:
			" Polymetro ist ein einfaches Metronom, das Polyrhythmen spielen kann. Stellen Sie sicher, dass sich Ihr Telefon NICHT im lautlosen Modus befindet. Schalten Sie das zweite Metronom ein, um Polyrhythmen zu üben!",
		appInstruction:
			"Tippen Sie auf die Kreise, um die Akzente umzuschalten. Um den Rhythmus zu ändern, tippen Sie auf die Zahlen, um den gewünschten Rhythmus auszuwählen.",
		install: "Installierung",
		installDescription:
			"Diese Web-App kann als App auf Ihrem Handy installiert werden.",
		chrome:
			"Klicken Sie auf das Menüsymbol und im Menü 'Zum Startbildschirm hinzufügen'.",
		firefox:
			"Klicken Sie auf das Menüsymbol und im Menü 'Zum Startbildschirm hinzufügen'. In der Adressleiste rechts neben der Seiten-URL sollte ein kleines Haussymbol mit einem Pluszeichen in der Mitte angezeigt werden. Klicken Sie darauf und '+ Zum Startbildschirm hinzufügen'.",
		safari:
			"Klicken Sie auf die Schaltfläche 'Teilen' (Feld mit dem Aufwärtspfeil) und im sich öffnenden Popup 'Zum Startbildschirm hinzufügen'."
	},
	cn: {}
};

const i18n = new VueI18n({ locale: "de", fallbackLocale: "de", messages });

export default i18n;
