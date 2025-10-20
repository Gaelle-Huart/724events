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
    const events = container.querySelector("#events");
    expect(events).toBeInTheDocument();
  });

  describe("and a click is triggered on the event", () => {
    it("should open a modal", () => {
      const { container } = render(<Home />);
      fireEvent(
        container.querySelector("#events"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      screen.findByText("Participants")
    });
  });

  it("should display a list of services", async () => {
    const { container } = render(<Home />);
    const entreprise = container.querySelector("#service-entreprise")
    const conférence = container.querySelector("#service-conférence")
    const digital = container.querySelector("#service-digital")
    expect(entreprise).toBeInTheDocument();
    expect(conférence).toBeInTheDocument();
    expect(digital).toBeInTheDocument();
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
    const { container } = render(<Home/>);
    const footer = await screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
    const prestation = container.querySelector("#footer-prestation")
    const contact = container.querySelector("#footer-contact")
    const description = container.querySelector("#footer-description")
    expect(prestation).toBeInTheDocument();
    expect(contact).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  })

  it("should display an event card of the last event", async () => {
    render(<Home/>);
    const eventCard = await screen.getByTestId("card-testid");
    expect(eventCard).toBeInTheDocument();    
  })
});