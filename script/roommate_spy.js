

setInterval(async () => {
  try {
    await fetch('https://playsaurus-api.godotjobs.dev/', {
      method: "POST"
    })
    console.log("Ping sent successfully!")
  } catch (e) {
    console.error("Error reaching out to server :(")
  }
}, 60 * 1000)