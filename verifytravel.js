var a=getSixDigitRandom();
        document.getElementById("zx").innerText=a;
        function getSixDigitRandom() {
        return Math.random().toString().substring(2, 8);}