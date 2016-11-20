using UnityEngine;
using System.Collections;
using SocketIO;

public class Network : MonoBehaviour {

	static SocketIOComponent socket;

	public GameObject masterObject;

	public GameObject playerPrefab;

	// Use this for initialization
	void Start () {
		socket = GetComponent<SocketIOComponent> ();
		socket.On ("open", OnConnected);
		socket.On ("spawn", OnSpawned);
		socket.On ("CMS EVENT ONE", OnCMSevent);
	}

	void OnConnected(SocketIOEvent e){
		Debug.Log("connected");
		socket.Emit("move");
	}

	void OnSpawned(SocketIOEvent e){
		Debug.Log ("Spawned!");
	}

	void OnCMSevent(SocketIOEvent e){
		
		Debug.Log (e);
		masterObject.GetComponent<MasterObjectScript> ().ChangeObject ("one");
	}
}
