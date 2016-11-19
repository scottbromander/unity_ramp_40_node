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
		if(currentObject != null){
			Destroy (currentObject);
		}

		if(shapeObject == "one"){

		}
	}
}
