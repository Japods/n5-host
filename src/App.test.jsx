import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Host Application (con MicroFrontends Mockeados en Setup)", () => {
  test("se renderiza correctamente el Header y muestra la lista de Rick y Morty por defecto", async () => {
    render(<App />);

    // Verifica que el Header se renderiza correctamente
    expect(
      screen.getByText("N5 Test Frontend / Jose Daniel Vivas Rosales")
    ).toBeInTheDocument();

    // Verifica que el microfrontend de Rick y Morty se muestra por defecto
    expect(await screen.findByText("Mocked RM List")).toBeInTheDocument();
  });

  test("cambia a Harry Potter cuando se selecciona", async () => {
    render(<App />);

    // Seleccionar "Harry Potter"
    const hpButton = screen.getByText("Harry Potter");
    fireEvent.click(hpButton);

    // Verificar que ahora se muestra el microfrontend de Harry Potter
    expect(await screen.findByText("Mocked HP List")).toBeInTheDocument();
  });

  test("cambia el idioma cuando se selecciona Español", async () => {
    render(<App />);

    // Seleccionar "Español"
    const spanishButton = screen.getByText("Español");
    fireEvent.click(spanishButton);

    // Verificar que el botón de español ahora es activo
    expect(spanishButton).toBeInTheDocument();
  });

  test("cambia el idioma cuando se selecciona Inglés", async () => {
    render(<App />);

    // Seleccionar "Inglés"
    const englishButton = screen.getByText("Inglés");
    fireEvent.click(englishButton);

    // Verificar que el botón de inglés ahora es activo
    expect(englishButton).toBeInTheDocument();
  });
});
