

setInterval(async () => {
  try {
    await fetch('http://34.133.54.49/', {
      method: "POST"
    })
    console.log("Ping sent successfully!")
  } catch (e) {
    console.error("Error reaching out to server :(")
  }
}, 60 * 1000)