function route(handle, pathname, response) {
  console.log("About to route request for " + pathname);
  
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(content);
    response.end();
  }
}

exports.route = route;
