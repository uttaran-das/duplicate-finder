# Duplicate Finder App

This is a simple web application built with React, TypeScript, and Material-UI (MUI) that allows users to find duplicate files within a selected folder. The app is designed to run entirely on the client side, making it a lightweight and portable solution.

## Features

- **Folder Selection**: Users can select a folder containing files and subfolders.
- **Duplicate Detection**: The app calculates SHA-256 hashes for each file and identifies duplicates.
- **Upload Summary**: Displays the number of files and subfolders uploaded.
- **Result Display**: Lists all duplicate files found within the selected folder.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Material-UI (MUI)**: A popular React UI framework for designing responsive and aesthetically pleasing web applications.
- **Vite**: A fast build tool that serves as the development environment for this project.

## Installation

To run this application locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/duplicate-finder.git
   cd duplicate-finder
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open the application**:
   Navigate to `http://localhost:3000` in your web browser.

## Usage

1. **Select Folder**: Click the "Select Folder" button to choose a folder containing files and subfolders.
2. **Find Duplicates**: After selecting the folder, click the "Find Duplicates" button to start the duplicate detection process.
3. **View Results**: The app will display the number of files and subfolders uploaded, and list any duplicate files found.

## Browser Support

The `webkitdirectory` attribute used for folder selection is supported in modern browsers like Chrome, Firefox, and Edge. However, it is not supported in all browsers. If you encounter issues with folder selection, ensure you are using a supported browser.

## Performance

For large folders or a large number of files, this approach may be slow due to the client-side processing. The app calculates SHA-256 hashes for each file, which can be resource-intensive for very large datasets.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material-UI (MUI)](https://mui.com/)
- [Vite](https://vitejs.dev/)

---

Feel free to customize this README file further to include any additional information specific to your project.