using UnityEngine;
using System.Collections;

public class MasterObjectScript : MonoBehaviour {

	public GameObject objectOne;
	public GameObject objectTwo;
	public GameObject objectThree;

	private GameObject currentObject = null;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	public void ChangeObject(string shapeObject){
		Debug.Log ("Made it into change object");
		if(currentObject != null){
			Destroy (currentObject);
		}

		if(shapeObject == "one"){
			Debug.Log ("Made it here");
			var newObject = Instantiate (objectOne);
			newObject.transform.parent = gameObject.transform;
		}
	}
}
