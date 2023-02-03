document.addEventListener("click", function (e) {
    switch (e.target) {
      case "axe":
        activeToolOrMaterial = axe;
        break;
      case "shovel":
        activeToolOrMaterial = shovel;
        break;
      case "pick":
        activeToolOrMaterial = pick;
        break;
      case "bucket":
        activeToolOrMaterial = bucket;
        break;
      case "waterInventory":
        activeToolOrMaterial = waterInventory;
        break;
      case "woodInventory":
        activeToolOrMaterial = woodInventory;
        break;
      case "rockInventory":
        activeToolOrMaterial = rockInventory;
        break;
      case "leafInventory":
        activeToolOrMaterial = leafInventory;
        break;
      case "dirtInventory":
        activeToolOrMaterial = dirtInventory;
        break;
      case "grassInventory":
        activeToolOrMaterial = grassInventory;
        break;
    }
    console.log(activeToolOrMaterial)
  });