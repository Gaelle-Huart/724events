import { fireEvent, render, screen } from "@testing-library/react";
import Menu from "./index";

describe("When Menu is created", () => {
  it("a list of mandatories links and the logo are displayed", async () => {
    render(<Menu />);
    await screen.findByText("Nos services");
    await screen.findByText("Nos réalisations");
    await screen.findByText("Notre équipe");
    await screen.findByText("Contact");
  });

  describe("and a click is triggered on contact button", () => {
    it("document location href change", async () => {
      render(<Menu />);
      fireEvent(
        await screen.findByText("Contact"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      expect(window.document.location.hash).toEqual("#contact");
    });
  });
  
  describe("and a click is triggered on services link", () => {
    it("should change the current location to the selected href", async () => {
      window.document.location.hash = "";
      render(<Menu />);
      const link = await screen.findByRole("link", { name: "Nos services" });
      expect(link).toHaveAttribute("href", "#nos-services");
      fireEvent(
        link,
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      window.document.location.hash = link.getAttribute("href");
      expect(window.document.location.hash).toEqual("#nos-services");
    });
  });

  describe("and a click is triggered on realisations link", () => {
    it("should change the current location to the selected href", async () => {
      window.document.location.hash = "";
      render(<Menu />);
      const link = await screen.findByRole("link", { name: "Nos réalisations" });
      expect(link).toHaveAttribute("href", "#nos-realisations");
      fireEvent(
        link,
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      window.document.location.hash = link.getAttribute("href");
      expect(window.document.location.hash).toEqual("#nos-realisations");
    });
  });

  describe("and a click is triggered on team link", () => {
    it("should change the current location to the selected href", async () => {
      window.document.location.hash = "";
      render(<Menu />);
      const link = await screen.findByRole("link", { name: "Notre équipe" });
      expect(link).toHaveAttribute("href", "#notre-equipe");
      fireEvent(
        link,
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      window.document.location.hash = link.getAttribute("href");
      expect(window.document.location.hash).toEqual("#notre-equipe");
    });
  });
});
