//
//  ViewController.swift
//  Spider
//
//  Created by Leonardo Javier Russo on 11/07/2020.
//  Copyright © 2020 Leonardo Javier Russo. All rights reserved.
//

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

        let webConfiguration = WKWebViewConfiguration ();
        webConfiguration.preferences.setValue(true, forKey: "allowFileAccessFromFileURLs");
        webView = WKWebView (frame: CGRect(x:0, y:0, width: myWidth, height:myHeight), configuration:webConfiguration);
        webView.uiDelegate = self ;
        view = webView;
        }

    override func viewDidLoad() {
    super.viewDidLoad()

    if let url = Bundle.main.url ( forResource: "SpiderGame"
                                 , withExtension: "htm"
                                 , subdirectory: "www")
        {
        let path = url.deletingLastPathComponent();
        self.webView.loadFileURL ( url
                                 , allowingReadAccessTo: path);
        self.view = webView ;
            view.window?.center()
        }
    }
    
    override func viewDidAppear() {
        super.viewDidAppear()

        self.view.window?.center()


    }
}
