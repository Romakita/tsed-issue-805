import {PlatformApplication} from "@tsed/common";
import {TestContext} from "@tsed/testing";
import * as SuperTest from "supertest";
import {Server} from "../Server";
import {ScopesController} from "./ScopesController";

describe("ScopesController", () => {
  let request: SuperTest.SuperTest<SuperTest.Test>;

  beforeEach(TestContext.bootstrap(Server as any, {
    mount: {
      "/": ScopesController
    },
    logger: {
      level: "error"
    }
  }));
  beforeEach(TestContext.inject([PlatformApplication], (app: PlatformApplication) => {
    request = SuperTest(app.raw);
  }));

  afterEach(TestContext.reset);

  it("scenario 1: GET /scopes/:scope/:id", async () => {
    const response = await request.get("/scopes/scenario1/abc/1").expect(200);

    response.text.should.be.deep.equal("abc");
  });

  it("scenario 2: GET /scopes/:scope/:id", async () => {
    const response = await request.get("/scopes/scenario2/abc/1").expect(200);

    response.text.should.be.deep.equal("abc");
  });

  it("scenario 3: POST /scopes/:scope/:id", async () => {
    const response = await request.post("/scopes/scenario3/abc/1").expect(200);

    response.body.should.be.deep.equal(["a", "b", "c"]);
  });

  it("scenario 4: POST /scopes/:scope/:id", async () => {
    const response = await request.post("/scopes/scenario4/abc/1").expect(200);

    response.body.should.be.deep.equal(["a", "b", "c"]);
  });
});
