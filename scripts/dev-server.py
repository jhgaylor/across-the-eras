#!/usr/bin/env python3
"""Local dev server with SPA fallback: /<slug>/ → index.html (mirrors nginx try_files). Usage: python3 scripts/dev-server.py [port]"""
import http.server, os, sys
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
class H(http.server.SimpleHTTPRequestHandler):
    def __init__(self,*a,**k): super().__init__(*a,directory=ROOT,**k)
    def do_GET(self):
        p=self.path.split("?")[0].split("#")[0]
        fs=os.path.join(ROOT,p.lstrip("/"))
        if p!="/" and not os.path.exists(fs) and "." not in os.path.basename(p): self.path="/index.html"
        return super().do_GET()
    def log_message(self,*a): pass
port=int(sys.argv[1]) if len(sys.argv)>1 else 8770
http.server.ThreadingHTTPServer(("",port),H).serve_forever()
