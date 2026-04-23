// Função Chat Bot


const comando = gets(); 

switch (comando) {
    case "start":
    print("Bot started")
    break

    case "stop":
    print("Bot stopped")
    break

    case "pause":
    print("Bot paused")
    break

    default:
    print("unknown command")
    break
}