# Spider Solitaire

Multiplatform Spider Solitaire porting.

![alt screenshot](https://raw.githubusercontent.com/lrusso/Spider/master/Spider.png)

| PLATFORM  | URL
| :------------ |:---------------:|
| Web | https://lrusso.github.io/Spider/Spider.htm
| Mac | https://lrusso.github.io/Spider/Spider.zip
| Android | https://lrusso.github.io/Spider/Spider.apk

## Based on the work of:

https://games.gameboss.com/spidersolitairewindowsxp/index.html?lang=en

## How to develop a similar Mac App for another project

* Install XCode and open it.

* Select **File/New/Project** from the main menu.

* Select **App** (top left) and Select **Next** (bottom right).

* Give your app a name, for User Interface select **Storyboard** and then select **Next**.

* Select a folder for where to store your new app on your computer and select **Create**.

* In Xcode Navigator (left panel) select **Add Files** from the context menu.

* Select the folder containing your html/javascript/css/image files - in this example I assume the folder will have the name **www** but it can be anything - just remember to change **www** in the code shown below to what you want.

* Select **Create folder references for any added folders** and select **Add**.

* Select **ViewController.swift** from the Navigator pane and replace everything with with code shown below, changing **www** to the folder name containing your html etc and changing **AppName** to the name of your html file.

```
import Cocoa
import WebKit

class ViewController: NSViewController, WKUIDelegate
    {
    var webView: WKWebView!

    override func loadView()
        {
        var myWidth = 800
        var myHeight = 600

        if let screen = NSScreen.main {
            let rect = screen.frame
            myHeight = Int(rect.size.height)
            myWidth = Int(rect.size.width)
            }

        let webConfiguration = WKWebViewConfiguration()
        webConfiguration.preferences.setValue(true, forKey: "allowFileAccessFromFileURLs")
        webView = WKWebView (frame: CGRect(x:0, y:0, width: myWidth, height: myHeight), configuration:webConfiguration)
        webView.uiDelegate = self
        view = webView
        }

    override func viewDidLoad() {
    super.viewDidLoad()
    if let url = Bundle.main.url (forResource: "SpiderGame", withExtension: "htm", subdirectory: "www") {
        let path = url.deletingLastPathComponent()
        self.webView.loadFileURL ( url, allowingReadAccessTo: path)
        self.view = webView
        view.window?.center()
        }
    }
    
    override func viewDidAppear() {
        super.viewDidAppear()
        self.view.window?.center()
    }
}
```

* Click in your project name (first item at the left panel) and go to **Signing & Capabilities**.

* Check **Incoming Connections (Server)** and **Outgoing Connections (Client)**.

* Click **Run** and use your new app.

* For changing the App icon, click **Assets.xcassets** in the Project navigator (left panel).

* Click in **AppIcon** and insert the icons into the grid that just showed up (check the required icon resolution for each case).

* For getting the .app file, go back to Xcode and then click in **Product/Archive**.

* Right click in the first item of the list and then click in **Show in Finder**.

* Right click to (ProductName).xcarchive file.

* Click in **Show package contents**.

* Go to **Products** folder.

* Go to **Applications** folder.

* There is your .app project file.
