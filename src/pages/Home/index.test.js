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
  it("should display a list of events", async () => {
    const { container } = render(<Home />);
    await screen.findByRole("heading", { name: "Nos réalisations" });
    const events = container.querySelector("#events");
    expect(events).toBeInTheDocument();
  })
  it("should display a list of services", async () => {
    render(<Home/>);
    await screen.findByTestId("service-entreprise")
    await screen.findByTestId("service-conférence")
    await screen.findByTestId("service-digital")
  })
  it("should display a list of people", async () => {
    render(<Home/>);
    await screen.findByText("Samira")
    await screen.findByText("CEO")
    await screen.findByText("Alice")
    await screen.findByText("Luís")
    await screen.findByText("Christine")
    await screen.findByText("Isabelle")
  })
  it("should display a footer", async () => {
    render(<Home/>);
    const footer = await screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  })
  it("should display an event card of the last event", async () => {
    render(<Home/>);
    const eventCard = await screen.getByTestId("card-testid");
    expect(eventCard).toBeInTheDocument();
  })
});
