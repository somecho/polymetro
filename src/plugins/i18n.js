import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
	EN: {
		polymodeSwitch: "Second metronome",
		tapToChoose: "Tap to choose",
		appDescription:
			"Polymetro is a simple metronome that can play polyrhythms.ajiaMake sure your phone is NOT in silent mode.  Turn on the second metronome to practice polyrhythms!",
		appInstruction:
			"Tap on the circles to toggle accents. To change the rhythm, tap the numbers to select the rhythm you want.",
		install: "Installation",
		installDescription:
			"Polymetro can be directly installed as an app on your phone. See below for instructions specific to your browser.",
			chromeTitle: "Chrome",
		chrome:
			"Click on the menu icon and in the menu 'Add to home screen'.",
			firefoxTitle: "Firefox",
		firefox:
			"In the address bar, to the right of the page URL you should see a little house icon with a plus symbol in the middle. Click on it and '+ Add to home screen'.",
			safariTitle: "Safari",
		safari:
			"Click on the share button (box with up arrow) and in the opening popup 'Add to Home Screen'."
	},
	DE: {
		polymodeSwitch: "Zweites Metronom",
		tapToChoose: "Tippen zum Wählen",
		appDescription:
			" Polymetro ist ein einfaches Metronom, das Polyrhythmen spielen kann. Stellen Sie sicher, dass sich Ihr Telefon NICHT im lautlosen Modus befindet. Schalten Sie das zweite Metronom ein, um Polyrhythmen zu üben!",
		appInstruction:
			"Tippen Sie auf die Kreise, um die Akzente umzuschalten. Um den Rhythmus zu ändern, tippen Sie auf die Zahlen, um den gewünschten Rhythmus auszuwählen.",
		install: "Installierung",
		installDescription:
			"Diese Web-App kann als App auf Ihrem Handy installiert werden.",
			chromeTitle: "Chrome",
		chrome:
			"Klicken Sie auf das Menüsymbol und im Menü 'Zum Startbildschirm hinzufügen'.",
			firefoxTitle: "Firefox",
		firefox:
			"Klicken Sie auf das Menüsymbol und im Menü 'Zum Startbildschirm hinzufügen'. In der Adressleiste rechts neben der Seiten-URL sollte ein kleines Haussymbol mit einem Pluszeichen in der Mitte angezeigt werden. Klicken Sie darauf und '+ Zum Startbildschirm hinzufügen'.",
			safariTitle: "Safari",
		safari:
			"Klicken Sie auf die Schaltfläche 'Teilen' (Feld mit dem Aufwärtspfeil) und im sich öffnenden Popup 'Zum Startbildschirm hinzufügen'."
	},
	CN: {
			polymodeSwitch: "第二节拍器",
			tapToChoose: "点击选择",
			appDescription: "Polymetro是一个多节奏型的节拍器。使用前，请打开声音。打开左下角的“第二节拍器”按钮来开始多节奏型练习吧！",
			appInstruction: "点击蓝色圆圈以切换轻重音。右下角的”点按选择“可以更改所需的节奏。",
			install: "安装方法",
			installDescription: "这个应用程序可以直接下载到手机，不需要通过app store进行下载。不同浏览器请参考以下安装方法。",
			chromeTitle: "在Chrome浏览器下载方法：",
			chrome: "单击菜单图标，然后选择“添加到主屏幕”中。",
			firefoxTitle: "在Firefox浏览器下载方法：",
			firefox: "在地址栏中，您会看到一个中间带有加号的小房子图标。 单击这个按钮，选择“ +添加到主屏幕”。",
			safariTitle: "在Safari浏览器下载方法：",
			safari: "单击共享按钮（带有向上箭头的指示标），然后选择“添加到主屏幕”中。"
	}
};

const i18n = new VueI18n({ locale: "CN", fallbackLocale: "EN", messages });

export default i18n;
