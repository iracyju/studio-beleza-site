<Card className="text-center">
  <CardContent className="p-6">
    <Phone className="mx-auto h-12 w-12 text-pink-400 mb-4" />
    <h2 className="text-xl font-semibold">Contato Rápido</h2>
    <p className="mt-2 text-sm">Fale conosco pelo WhatsApp em um clique</p>
    <Button
      className="mt-4"
      onClick={() =>
        window.open(
          "https://wa.me/5599999999999?text=Olá! Gostaria de mais informações sobre os serviços do salão.",
          "_blank"
        )
      }
    >
      Falar no WhatsApp
    </Button>
  </CardContent>
</Card>
