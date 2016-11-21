using UnityEngine;
using System.Collections;
using SocketIO;

public class Network : MonoBehaviour {

	static SocketIOComponent socket;

	public GameObject masterObject;

	public GameObject playerPrefab;

	private MasterObjectScript masterObjectScript;

	// Use this for initialization
	void Start () {
		socket = GetComponent<SocketIOComponent> ();
		socket.On ("open", OnConnected);
		socket.On ("spawn", OnSpawned);
		socket.On ("CMS EVENT", OnCMSevent);
		socket.On ("CMS SPEED EVENT", OnSpeedCMSevent);

		masterObjectScript = masterObject.GetComponent<MasterObjectScript> ();
	}

	void OnConnected(SocketIOEvent e){
		Debug.Log("connected");
		//socket.Emit("move");
	}

	void OnSpawned(SocketIOEvent e){
		Debug.Log ("Spawned!");
	}

	void OnCMSevent(SocketIOEvent e){
		Debug.Log ("Change Object Event");
		var dataString = e.data[0].ToString();
		dataString = dataString.Replace("\"", "");

		masterObjectScript.ChangeObject (dataString);
	}

	void OnSpeedCMSevent(SocketIOEvent e){
		Debug.Log ("Change Speed Event");
		var dataString = e.data[0].ToString();
		dataString = dataString.Replace("\"", "");

		masterObjectScript.ChangeSpeed(dataString);
	}
}