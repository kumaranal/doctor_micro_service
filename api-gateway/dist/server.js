"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_http_proxy_1 = __importDefault(require("express-http-proxy"));
const app = (0, express_1.default)();
app.use("/users", (0, express_http_proxy_1.default)("http://localhost:5001"));
app.use("/demo", (0, express_http_proxy_1.default)("http://google.com"));
app.use("/products", (0, express_http_proxy_1.default)("http://localhost:6001"));
app.listen(3000, () => {
    console.log("Gateway server listening on port 3000");
});
