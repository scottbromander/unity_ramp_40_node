using UnityEngine;
using System.Collections;

public class MasterObjectScript : MonoBehaviour {

	public GameObject objectOne;
	public GameObject objectTwo;
	public GameObject objectThree;

	private Spin spin;

	private GameObject currentObject = null;

	void Awake() {
		spin = GetComponent<Spin> ();
	}

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

		Debug.Log (shapeObject);

		GameObject newObject = null;

		switch (shapeObject) {
		case "one":
			newObject = Instantiate (objectOne);
			newObject.transform.parent = gameObject.transform;
			break;
		case "two":
			newObject = Instantiate (objectTwo);
			newObject.transform.parent = gameObject.transform;
			break;
		case "three":
			newObject = Instantiate (objectThree);
			newObject.transform.parent = gameObject.transform;
			break;
		}

		if (newObject != null)
			currentObject = newObject;

	}

	public void ChangeSpeed(string speed){
		switch (speed) {
		case "neg":
			spin.spinSpeed = -10;
			break;
		case "no":
			spin.spinSpeed = 0;
			break;
		case "pos":
			spin.spinSpeed = 10;
			break;
		}
	}
}
