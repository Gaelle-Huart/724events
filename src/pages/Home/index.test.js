import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personnel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    render(<Home/>);
    await screen.findByRole('heading', {name:"Nos réalisations"});
    await screen.findAllByTestId("card-testid");
  })
  it("a list of service is displayed", async () => {
    render(<Home/>);
    await screen.findByTestId("service-entreprise")
    await screen.findByTestId("service-conférence")
    await screen.findByTestId("service-digital")
  })
  it("a list of people is displayed", async () => {
    render(<Home/>);
    await screen.findByText("Samira")
    await screen.findByText("CEO")
    await screen.findByText("Alice")
    await screen.findByText("Luís")
    await screen.findByText("Christine")
    await screen.findByText("Isabelle")
  })
  it("a footer is displayed", async () => {
    render(<Home/>);
    const footer = await screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  })
  it("an event card, with the last event, is displayed", async () => {
    render(<Home/>);
    const eventCard = await screen.getByTestId("card-testid");
    expect(eventCard).toBeInTheDocument();
  })
});
