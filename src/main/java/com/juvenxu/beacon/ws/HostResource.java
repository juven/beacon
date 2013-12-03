package com.juvenxu.beacon.ws;

import net.sf.json.JSONObject;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author juven
 */
@Path("/hosts")
public class HostResource {

    @GET
    @Path("{hid}")
    @Produces("application/json")
    public String getHost(@PathParam("hid") String id) {

        return buildJSON(id);
    }


    private String buildJSON(String id) {
        Map<String, Object> obj = new HashMap<String, Object>();

        obj.put("id", id);
        obj.put("status", "ok");

        return JSONObject.fromObject(obj).toString();
    }
}
