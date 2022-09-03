function call_api() {
    fetch("http://localhost:8080")
      .then((data) => console.log(data));
  }
  
  for (let i = 0; i < 5; i++) {
    call_api();
  }
  