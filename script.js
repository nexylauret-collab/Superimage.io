/* Styles Généraux */
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

/* Navbar style */
.navbar {
    display: flex;
    align-items: center;
    padding: 15px 30px;
    background: white;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.logo { color: #e60023; font-weight: bold; font-size: 24px; margin-right: 20px; }

.search-bar {
    flex-grow: 1;
    padding: 12px 20px;
    border-radius: 25px;
    border: 1px solid #ddd;
    background-color: #efefef;
}

/* La Grille Pinterest */
.pin-container {
    column-count: 4; /* Nombre de colonnes */
    column-gap: 15px;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.pin-card {
    display: inline-block;
    width: 100%;
    margin-bottom: 15px;
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    cursor: zoom-in;
}

.pin-card img {
    width: 100%;
    display: block;
    transition: transform 0.3s ease;
}

/* Effets au survol */
.pin-card:hover img {
    filter: brightness(70%);
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 15px;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.pin-card:hover .overlay { opacity: 1; }

.save-btn {
    background-color: #e60023;
    color: white;
    border: none;
    padding: 10px 18px;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
}

/* Responsive */
@media (max-width: 800px) { .pin-container { column-count: 2; } }
