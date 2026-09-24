import http.server
import socketserver
import os

PORT = 8080

class Handler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        # get the original translated path
        translated = super().translate_path(path)
        
        # if the path is a directory, don't change anything
        if os.path.isdir(translated):
            return translated
            
        # if the path does not have an extension and doesn't exist, try appending .html
        if not os.path.splitext(translated)[1] and not os.path.exists(translated):
            html_path = translated + ".html"
            if os.path.exists(html_path):
                return html_path
                
        return translated

if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving at port {PORT}")
        httpd.serve_forever()
